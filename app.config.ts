type NavigationLinks = Array<{
    title: string,
    path: string
}>
const navigationLinks: NavigationLinks = [
    { title: 'Projects', path: '/projects' },
    { title: 'Topics', path: '/topics' },
    { title: 'About', path: '/about' }
]

export default defineAppConfig({
    coinDataField: 'coinId',
    navigationLinks
})