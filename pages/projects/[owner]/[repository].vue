<template>
    <div class="flex gap-8">
        <div>
            total stats go here
        </div>

        <div>
            <h1 class="text-5xl font-semibold">{{name}}</h1>
            <h2 class="line-clamp-4 overflow-hidden leading-snug max-w-2xl mt-4 text-md">
                <p :title="gitDescription">{{gitDescription}}</p>
                <p :title="description" v-html="description"></p>
            </h2>
            <ul class="flex gap-2 justify-start mt-4">
                <li v-for="topic in topics" :key="topic">
                    <NuxtLink :to="`/topics/${topic}`">
                        <UButton
                            color="gray"
                            variant="solid"
                            size="sm"
                            class="whitespace-nowrap rounded-full text-green-400"
                        >
                            {{topic}}
                        </UButton>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div>
            social links
            <ul>
                <li>repositoryUrl - {{repositoryUrl}}</li>
                <li>homepageUrl - {{homepageUrl}}</li>
                <li>twitterUrl - {{twitterUrl}}</li>
                <li>subredditUrl - {{subredditUrl}}</li>
                <li>otherLinks - {{otherLinks}}</li>
            </ul>
            <pre>{{links}}</pre>
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
/* eslint-disable camelcase */
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
const links = computed(() => currentRepositoryData.value.coinId?.links) // questionable
const repositoryUrl = computed(() => currentRepositoryData.value._id)
const homepageUrl = computed(() => {
    return filterOutEmptyStrings(currentRepositoryData.value?.coinId.links.homepage)[0]
})
const twitterUrl = computed(() => {
    const twitterHandle = currentRepositoryData.value.coinId.links.twitter_screen_name
    return twitterHandle ? `https://twitter.com/${twitterHandle}/` : null
})
const subredditUrl = computed(() => currentRepositoryData.value.coinId.links.subreddit_url)

// TODO
// const telegramUrl = null
// TODO
// const fasebookUrl = null

const otherLinks = computed(() => {
    const homepage = filterOutEmptyStrings(currentRepositoryData.value.coinId.links.homepage)
    const blockchain_site = filterOutEmptyStrings(currentRepositoryData.value.coinId.links.blockchain_site)
    const official_forum_url = filterOutEmptyStrings(currentRepositoryData.value.coinId.links.official_forum_url)
    const chat_url = filterOutEmptyStrings(currentRepositoryData.value.coinId.links.chat_url)
    const announcement_url = filterOutEmptyStrings(currentRepositoryData.value.coinId.links.announcement_url)

    const otherLinks = [
        homepage,
        blockchain_site,
        official_forum_url,
        chat_url,
        announcement_url
    ]

    return otherLinks.flat()
})
</script>

<style lang="sass" scoped>
:deep(a)
    @apply text-green-400
</style>