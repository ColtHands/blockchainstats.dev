export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig()
    const remoteApiUrl = runtimeConfig.private.remoteApiUrl

    const method = event.path.replace('/api/remoteApiProxy', '')
    const target = `${remoteApiUrl}${method}`

    return proxyRequest(event, target)
})