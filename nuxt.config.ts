import { NuxtConfig, defineNuxtConfig } from 'nuxt/config'

type NuxtConfigExtended = NuxtConfig & {
    tailwindcss: Record<string, unknown>
}

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxt/ui',
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        cssPath: '~/assets/styles/tailwind.css'
    },
    css: ['~/assets/styles/tailwind.css'],
    runtimeConfig: {
        public: {
            apiUrl: ''
        }
    },
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