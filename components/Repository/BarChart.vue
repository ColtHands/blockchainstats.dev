<template>
    <UCard>
        <template #header>
            <div class="flex justify-between">
                <h2 class="text-xl">
                    <slot name="header" />
                </h2>
                <!-- <USelect
                    variant="outline"
                    placeholder="Chart Type"
                    :options="['a', 'b', 'c']"
                /> -->
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

// const props = defineProps<{repositoryUpdates:any}>()

// const repositoryUpdates = toRefs(props).repositoryUpdates
// const stars = repositoryUpdates.value.map(e => e.s)

const series = [{
    // data: stars
    data: [44, 55, 41, 64, 22, 43, 21]
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
            return `+${val}`
        },
        style: {
            fontSize: '16px',
            colors: ['#fff']
        }
    },
    // stroke: {
    //     show: false,
    //     width: 1,
    //     colors: ['blue']
    // },
    tooltip: {
        enabled: false,
        shared: true,
        intersect: false
    },
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
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