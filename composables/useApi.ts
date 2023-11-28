export default function useApi() {
    const rawUrl = useRuntimeConfig().public.apiUrl
    const protocol = 'http'
    const port = 3000
    const baseUrl = `${protocol}://${rawUrl}:${port}`

    const getRepositories = async (includeCoinData?: boolean, limit?: number, timeFrame?: string, sortBy?: string) => {
        const url = `${baseUrl}/get-repositories`

        const { data } = await useFetch(url, {
            query: {
                includeCoinData,
                timeFrame: timeFrame ? timeFrame : 'week',
                sortBy: sortBy ? sortBy : 'stars',
                limit: limit ? limit : 10
            }
        })

        return data
    }

    return {
        getRepositories
    }
}