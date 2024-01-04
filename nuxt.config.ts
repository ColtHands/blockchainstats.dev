import { type NuxtConfig, defineNuxtConfig } from 'nuxt/config'

type NuxtConfigExtended = NuxtConfig & {
    tailwindcss: Record<string, unknown>
}

const isDevEnv = process.env.NODE_ENV === 'development'
const remoteApiUrl = process.env.NUXT_PRIVATE_API_URL

export default defineNuxtConfig({
    devtools: { enabled: isDevEnv },
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
            title: 'Blockchain Developer Stats'
        },
        private: {
            remoteApiUrl
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