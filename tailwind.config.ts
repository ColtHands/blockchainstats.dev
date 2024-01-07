import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    safelist: [
        'text-green-400',
        'hover:text-green-400',
        'sm:hidden'
    ],
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    theme: {
        screens: {
            xs: '480px',
            ...defaultTheme.screens
        },
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