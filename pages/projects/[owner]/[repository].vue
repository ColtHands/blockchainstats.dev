<template>
    <div class="flex gap-8">
        <div>
            total stats go here
        </div>

        <div>
            <h1 class="text-5xl font-semibold">{{name}}</h1>
            <div class="line-clamp-5 overflow-hidden leading-snug max-w-2xl mt-4">
                <p :title="gitDescription">{{gitDescription}}</p>
                <p :title="description" v-html="description"></p>
            </div>
            <ul class="flex gap-2 justify-start mt-4">
                <li v-for="topic in topics" :key="topic">
                    <NuxtLink :to="`/topics/${topic}`">
                        <UButton color="gray" variant="solid" size="xs">{{topic}}</UButton>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div>
            social links
        </div>
    </div>
    <div>
        <div>header for chart stars</div>
        <div>
            chart for git stars over time
        </div>
    </div>
    <hr>
    <div class="flex justify-between">
        <div>
            <div>header for chart issues</div>
            <div>
                chart for git issues over time
            </div>
        </div>
        <div>
            <div>header for chart fors</div>
            <div>
                chart for git fors over time
            </div>
        </div>
    </div>
    <!-- <pre>name - {{name}}</pre>
    <pre>description - {{description}}</pre>
    <pre>gitDescription - {{gitDescription}}</pre>
    <pre>topics - {{topics}}</pre> -->

    <pre>params - {{route.params}}</pre>
    <pre>currentRepositoryData - {{currentRepositoryData}}</pre>
    <pre>repositories - {{repositories}}</pre>
    <pre>updates - {{repositoryUpdates}}</pre>
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
const cachedRepositoryData = repositories.data.value?.find(repo => repo.owner === route.params.owner && repo.repository === route.params.repository)
const currentRepositoryData = ref(cachedRepositoryData)

if(!cachedRepositoryData) {
    const singleRepository = await getSingleRepository(currentOwner, currentRepository)
    currentRepositoryData.value = ref(singleRepository).value
}
/** Array of repository daily updates */
const repositoryUpdates = await getRepositoryUpdates(currentOwner, currentRepository)

// const extendText =

const name = computed(() => currentRepositoryData.value.coinId?.name)
const description = computed(() => currentRepositoryData.value.coinId?.description.en)
const gitDescription = computed(() => currentRepositoryData.value.description)
const topics = computed(() => currentRepositoryData.value.topics)
</script>

<style lang="sass" scoped>
:deep(a)
    @apply text-green-400
</style>