<template>
    <UCard>
        <template #header>
            <div class="flex justify-between">
                <h2 class="text-xl">
                    <slot name="header" />
                </h2>
            </div>
        </template>
        <ClientOnly>
            <div id="chart" class="h-96">
                <apexchart
                    height="100%"
                    :options="chartOptions"
                    :series="series"
                />
            </div>
        </ClientOnly>
    </UCard>
</template>

<script lang="ts" setup>
import type { ApexOptions } from 'apexcharts'

const props = defineProps<{ repositoryUpdates: any }>()

const repositoryUpdates = toRefs(props).repositoryUpdates

const monthlyStarsSeries = computed(() => repositoryUpdates.value.slice(1, repositoryUpdates.value.length).map((update:any) => ({
    x: new Date(update.rawUpdate.createdAt).toLocaleDateString('default', { month: 'short' }),
    y: update.forks
})))

/**
 * @returns `{ '2023': 6 }`
 */
const years = repositoryUpdates.value.slice(1, repositoryUpdates.value.length).reduce((acc: any, curr: any) => {
    const currentYear = new Date(curr.rawUpdate.createdAt).getFullYear()
    return {
        ...acc,
        [currentYear]: acc[currentYear] ? acc[currentYear] + 1 : 1
    }
}, {})
const xaxisGroups = Object.keys(years).map(year => ({ title: year, cols: years[year] }))

const series = [{
    data: monthlyStarsSeries.value
}]

const chartOptions: ApexOptions = {
    // colors: ['red', 'blue', 'green'],
    // annotations: {},
    fill: {
        opacity: 1,
        colors: ['#16a34a']
    },
    chart: {
        type: 'bar',
        height: '100%',
        toolbar: {
            show: false
        },
        brush: {
            enabled: false
        }
        // foreColor: 'transparent',
    },
    plotOptions: {
        bar: {
            borderRadius: 6,
            horizontal: false,
            columnWidth: '55%',
            dataLabels: {
                position: 'top'
            }
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: -1,
        offsetY: -25,
        textAnchor: 'middle',
        // distributed: false,
        formatter(val: string) {
            return parseInt(val) > 0 ? `+${val}` : val
        },
        style: {
            fontSize: '16px',
            colors: ['#fff']
        }
    },
    tooltip: {
        enabled: false,
        shared: true,
        intersect: false
    },
    xaxis: {
        type: 'category',
        group: {
            style: {
                fontSize: '10px',
                fontWeight: 700
            },
            groups: xaxisGroups
        }
    },
    yaxis: {
        opposite: true,
        labels: {
            show: false
        }
    },
    grid: {
        show: false
    }
}
</script>