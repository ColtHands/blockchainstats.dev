import VueApexCharts from 'vue3-apexcharts'

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-expect-error works correctly
    nuxtApp.vueApp.use(VueApexCharts)
})