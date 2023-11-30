export default function useApi() {
    const rawUrl = useRuntimeConfig().public.apiUrl
    const protocol = 'http'
    const port = 3000
    const baseUrl = `${protocol}://${rawUrl}:${port}`

    type GetRepositoriesFn = (includeCoinData?: boolean, limit?: string, timeFrame?: string, sortBy?: string, page?: number) => Promise<unknown>
    const getRepositories: GetRepositoriesFn = async (includeCoinData, limit, timeFrame, sortBy, page) => {
        const limitParsed = limit ? Number(limit) : 10
        const offset = page ? ((page - 1) * limitParsed) : 1

        const { data } = await useFetch(`${baseUrl}/get-repositories`, {
            query: {
                includeCoinData,
                timeFrame: timeFrame ? timeFrame : 'week',
                sortBy: sortBy ? sortBy : 'stars',
                limit: limitParsed,
                offset
            }
        })

        return data
    }

    const getRepositoriesCount = async () => {
        const { data } = await useFetch<number>(`${baseUrl}/count-repositories`)

        return data
    }

    return {
        getRepositories,
        getRepositoriesCount
    }
}