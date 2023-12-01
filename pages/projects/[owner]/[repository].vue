<template>
    <div>params</div>
    <pre>{{route.params}}</pre>
    <div>currentRepositoryData</div>
    <pre>{{currentRepositoryData}}</pre>
    <div>repositories</div>
    <pre>{{repositories}}</pre>
    <div>updates</div>
    <pre>{{repositoryUpdates}}</pre>
</template>

<script lang="ts" setup>
const route = useRoute()
const currentOwner = route.params.owner as string
const currentRepository = route.params.repository as string
const { getRepositoryUpdates, getSingleRepository } = useApi()

/**
 * Cached data (a list of repositories) received from `repositories` fetch from `/index` or `/projects` pages
 */
const repositories = useNuxtData('repositories')
const currentRepositoryData = ref(repositories.data.value?.find(repo => repo.owner === route.params.owner && repo.repository === route.params.repository))

if(!currentRepositoryData.value) {
    const singleRepository = await getSingleRepository(currentOwner, currentRepository)
    currentRepositoryData.value = singleRepository
}

const repositoryUpdates = await getRepositoryUpdates(currentOwner, currentRepository)
</script>