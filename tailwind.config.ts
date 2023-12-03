import type { Config } from 'tailwindcss'

export default {
    safelist: [
        'text-green-400',
        'hover:text-green-400'
    ],
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    theme: {
        extend: {
            colors: {
                emerald: {
                    990: '#011e16'
                }
            }
        }
    },
    plugins: []
} satisfies Config