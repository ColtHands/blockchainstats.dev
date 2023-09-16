export default function useApi() {
    const rawUrl = useRuntimeConfig().public.apiUrl
    const protocol = 'http'
    const port = 3000
    const baseUrl = `${protocol}://${rawUrl}:${port}`
    const getRepositoriesUrl = `${baseUrl}/get-repositories`

    const getRepositories = () => useFetch(getRepositoriesUrl)

    return {
        rawUrl,
        baseUrl,
        getRepositoriesUrl,
        getRepositories
    }
}