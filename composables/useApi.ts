export default function useApi() {
    const rawUrl = useRuntimeConfig().public.apiUrl
    const protocol = 'http'
    const port = 3000
    const baseUrl = `${protocol}://${rawUrl}:${port}`

    type GetRepositoriesFn = (
        includeCoinData?: boolean,
        limit?: number,
        timeFrame?: string,
        sortBy?:
        string,
        page?: number,
        topics?:  unknown
    ) => Promise<unknown>
    const getRepositories: GetRepositoriesFn = async (
        includeCoinData = false,
        limit = 10,
        timeFrame = 'week',
        sortBy = 'stars',
        page = 1,
        topics
    ) => {
        const offset = page ? ((page - 1) * limit) : 1

        const { data } = await useFetch(`${baseUrl}/get-repositories`, {
            key: 'repositories',
            query: {
                includeCoinData,
                timeFrame,
                sortBy,
                limit,
                offset,
                topics
            }
        })

        return data
    }

    const getRepositoriesCount = async () => {
        const { data } = await useFetch<number>(`${baseUrl}/count-repositories`)

        return data
    }

    const getRepositoryUpdates = async (owner: string, repository: string) => {
        const { data } = await useFetch(`${baseUrl}/get-repository-updates/${owner}/${repository}`, {
            query: {
                timeFrame: 'month'
            }
        })

        return data
    }

    const getSingleRepository = async (owner: string, repository: string) => {
        const { data } = await useFetch(`${baseUrl}/get-single-repository`, {
            key: `${owner}/${repository}`,
            query: {
                owner,
                repository,
                includeCoinData: true
            }
        })

        return data
    }

    const getTopics = async (limit = 20, offset = 0) => {
        const { data } = await useFetch(`${baseUrl}/topics`, {
            key: 'topics',
            query: {
                limit,
                offset,
                repositoryLimit: 10000
            }
        })

        return data
    }

    const getTopicsCount = async () => {
        const { data } = await useFetch(`${baseUrl}/topics/count`, {
            key: 'topicsCount'
        })

        return data
    }

    return {
        getRepositories,
        getTopics,
        getRepositoriesCount,
        getSingleRepository,
        getTopicsCount,
        getRepositoryUpdates
    }
}