export default function useApi() {
    const rawUrl = useRuntimeConfig().public.apiUrl
    const protocol = 'https'
    const url = new URL(`${protocol}://${rawUrl}`)

    return {
        rawUrl,
        url
    }
}