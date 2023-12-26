<template>
    <UCard>
        <template #header>
            <div class="flex justify-between">
                <h2 class="text-xl">
                    <slot name="header" />
                </h2>
            </div>
        </template>
        <p class="text-rose-500">
            Currently for some reason GitHub API sends incorrect issues count.
        </p>
        <ClientOnly>
            <div class="relative mt-4">
                <div>
                    <p class="text-2xl z-20 absolute top-0 left-0 h-full w-full flex items-center justify-center">
                        <span>In Progress</span>
                    </p>
                    <div class="absolute w-full h-full top-0 left-0 bg-black opacity-60 z-10 rounded-md"></div>
                </div>
                <div id="chart" class="h-96">
                    <apexchart
                        height="100%"
                        :options="chartOptions"
                        :series="series"
                    />
                </div>
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
    y: update.rawUpdate.oi
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
    annotations: {
        yaxis: [{ y: 0 }]
    },
    fill: {
        opacity: 1,
        colors: ['#16a34a']
    },
    chart: {
        type: 'area',
        height: '100%',
        toolbar: {
            show: false
        },
        brush: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: -1,
        offsetY: -5,
        textAnchor: 'middle',
        distributed: false,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        },
        background: {
            enabled: false
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
                colors: ['#00ff00', '#ff0000'],
                fontSize: '10px',
                fontWeight: 700
            },
            groups: xaxisGroups
        }
    },
    yaxis: {
        // opposite: true,
        labels: {
            show: true
        }
    },
    grid: {
        show: false
    },
    stroke: {
        curve: 'straight'
    }
}
</script>