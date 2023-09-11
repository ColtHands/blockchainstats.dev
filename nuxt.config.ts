import { NuxtConfig, defineNuxtConfig } from 'nuxt/config'

type NuxtConfigExtended = NuxtConfig & {
    tailwindcss: Record<string, unknown>
}

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {},
    sass: ['~/assets/styles/main.sass']
} as NuxtConfigExtended)