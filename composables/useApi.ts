export default function useApi() {
    const rawUrl = useRuntimeConfig().public.apiUrl
    const protocol = 'http'
    const port = 3000
    const baseUrl = `${protocol}://${rawUrl}:${port}`

    type GetRepositoriesFn = (includeCoinData?: boolean, limit?: number, timeFrame?: string, sortBy?: string, page?: number) => Promise<unknown>
    const getRepositories: GetRepositoriesFn = async (
        includeCoinData = false,
        limit = 10,
        timeFrame = 'week',
        sortBy = 'stars',
        page = 1
    ) => {
        const offset = page ? ((page - 1) * limit) : 1

        const { data } = await useFetch(`${baseUrl}/get-repositories`, {
            query: {
                includeCoinData,
                timeFrame,
                sortBy,
                limit,
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