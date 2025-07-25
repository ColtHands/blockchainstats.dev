import type { SearchParameters } from 'ofetch'

export default function useApi() {
    type GetRepositoriesFn = (
        includeCoinData?: boolean,
        limit?: number,
        timeFrame?: string,
        sortBy?:
        string,
        page?: number,
        topics?: unknown
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
        const query: SearchParameters  = {
            includeCoinData,
            timeFrame,
            sortBy,
            limit,
            offset
        }

        if(topics) {
            query['topics'] = topics
        }

        const { data } = await useFetch('/api/repositories', {
            key: 'repositories',
            query
        })

        return data
    }

    const searchRepositories = async (query: string) => {
        const { data } = await useFetch('/api/remoteApiProxy/repositories/search', {
            query: { query }
        })

        return data
    }

    const getRepositoriesCount = async () => {
        const { data } = await useFetch<number>('/api/remoteApiProxy/count-repositories')

        return data
    }

    const getRepositoryUpdates = async (owner: string, repository: string) => {
        const { data } = await useFetch(`/api/remoteApiProxy/get-repository-updates/${owner}/${repository}`, {
            query: {
                timeFrame: 'month'
            }
        })

        return data
    }

    const getSingleRepository = async (owner: string, repository: string) => {
        const { data } = await useFetch('/api/repository', {
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
        const { data } = await useFetch('/api/remoteApiProxy/topics', {
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
        const { data } = await useFetch('/api/remoteApiProxy/topics/count', {
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
        searchRepositories,
        getRepositoryUpdates
    }
}