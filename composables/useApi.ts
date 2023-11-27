export default function useApi() {
    const rawUrl = useRuntimeConfig().public.apiUrl
    const protocol = 'http'
    const port = 3000
    const baseUrl = `${protocol}://${rawUrl}:${port}`

    const getRepositories = async (includeCoinData?: boolean, limit?: number) => {
        const url = `${baseUrl}/get-repositories`

        const { data } = await useFetch(url, {
            query: {
                includeCoinData,
                limit: limit ? limit : 10
            }
        })

        return data
    }

    return {
        getRepositories
    }
}