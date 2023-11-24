export default function useApi() {
    const rawUrl = useRuntimeConfig().public.apiUrl
    const protocol = 'http'
    const port = 3000
    const baseUrl = `${protocol}://${rawUrl}:${port}`

    const getRepositories = (includeCoinData?: boolean) => {
        const url = `${baseUrl}/get-repositories`

        return $fetch(url, {
            query: {
                includeCoinData
            }
        })
    }
    return {
        getRepositories
    }
}