import { NuxtConfig, defineNuxtConfig } from 'nuxt/config'

type NuxtConfigExtended = NuxtConfig & {
    tailwindcss: Record<string, unknown>
}

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/styles/tailwind.css'
    },
    css: ['~/assets/styles/tailwind.css'],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    }
} as NuxtConfigExtended)