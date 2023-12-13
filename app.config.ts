type NavigationLinks = Array<{
    title: string,
    path: string
}>
const navigationLinks: NavigationLinks = [
    { title: 'Projects', path: '/projects' },
    { title: 'Topics', path: '/topics' },
    { title: 'About', path: '/about' }
]

/** NuxtUI module reserved app config key */
const ui = {
    primary: 'green',
    gray: 'slate'
}

export default defineAppConfig({
    coinDataField: 'coinId',
    ui,
    navigationLinks
})