<template>
    <div class="flex justify-between flex-wrap gap-8">
        <div>
            <div class="flex justify-start items-center gap-2">
                <img :src="imageUrl" class="w-10 h-10" :alt="`{{ name }} logo`" />
                <h1 class="text-5xl font-semibold">{{name}}</h1>
            </div>

            <div class="flex gap-2 mt-2">
                <RepositoryStatsBadge title="Stars">
                    <i class="text-xs fa-solid fa-star-half-stroke"></i> {{stars}}
                </RepositoryStatsBadge>
                <RepositoryStatsBadge title="Forks">
                    <i class="text-xs fa-solid fa-code-fork"></i> {{forks}}
                </RepositoryStatsBadge>
                <RepositoryStatsBadge title="Issues">
                    <i class="text-xs fa-regular fa-circle-dot"></i> {{issues}}
                </RepositoryStatsBadge>
            </div>

            <h2 class="line-clamp-4 overflow-hidden leading-snug max-w-2xl mt-4 text-md">
                <p :title="gitDescription">{{gitDescription}}</p>
                <p :title="description" v-html="description"></p>
            </h2>

            <ul class="flex flex-wrap gap-2 justify-start mt-4">
                <li v-for="topic in topics" :key="topic">
                    <UiTopic :topic="topic" />
                </li>
            </ul>
        </div>

        <!-- Links -->
        <nav class="w-full lg:w-44 flex flex-col gap-2">
            <RepositoryLinkButton :url="repositoryUrl">
                <template #icon>
                    <i class="fa-brands fa-github" />
                </template>
            </RepositoryLinkButton>
            <RepositoryLinkButton :url="homepageUrl">
                <template #icon>
                    <i class="fa-solid fa-house"></i>
                </template>
            </RepositoryLinkButton>
            <RepositoryLinkButton :url="twitterUrl">
                <template #icon>
                    <i class="fa-brands fa-x-twitter"></i>
                </template>
            </RepositoryLinkButton>
            <RepositoryLinkButton :url="subredditUrl">
                <template #icon>
                    <i class="fa-brands fa-reddit-alien"></i>
                </template>
            </RepositoryLinkButton>
            <UDropdown :items="otherLinks" variant="outlined">
                <UButton
                    block
                    variant="outline"
                    color="emerald"
                    label="Other Links"
                    class="flex justify-center text-white"
                    :popper="{ arrow: true }"
                    trailing-icon="i-heroicons-chevron-down-20-solid"
                />
                <template #item="{ item }">
                    <NuxtLink :to="item.url" target="_blank">{{item.label}}</NuxtLink>
                </template>
            </UDropdown>
        </nav>
    </div>

    <!-- Charts -->
    <div class="mt-10 grid grid-cols-2 gap-5">
        <RepositoryBarChart :repository-updates="repositoryUpdates" class="col-span-2">
            <template #header>
                <i class="fa-solid fa-star-half-stroke"></i> Stars updates each month
            </template>
        </RepositoryBarChart>

        <RepositoryForksBarChart :repository-updates="repositoryUpdates" class="max-lg:col-span-2">
            <template #header>
                <i class="fa-solid fa-code-fork"></i> Forks updates each month
            </template>
        </RepositoryForksBarChart>

        <RepositoryIssuesAreaChart :repository-updates="repositoryUpdates" class="max-lg:col-span-2">
            <template #header>
                <i class="fa-regular fa-circle-dot"></i> Open issues updates
            </template>
        </RepositoryIssuesAreaChart>
    </div>
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
const cachedRepositoryData = repositories.data.value?.find((repo: any) => repo.owner === route.params.owner && repo.repository === route.params.repository)
const currentRepositoryData = ref(cachedRepositoryData)

if(!cachedRepositoryData) {
    const singleRepository = await getSingleRepository(currentOwner, currentRepository)
    currentRepositoryData.value = ref(singleRepository).value
}

/** Array of repository daily updates */
const repositoryUpdates = await getRepositoryUpdates(currentOwner, currentRepository)

const name = computed(() => currentRepositoryData.value.coinId?.name)
const description = computed(() => currentRepositoryData.value.coinId?.description.en)
const gitDescription = computed(() => currentRepositoryData.value.description)
const topics = computed(() => currentRepositoryData.value.topics)
const stars = computed(() => currentRepositoryData.value.stars)
const issues = computed(() => currentRepositoryData.value.open_issues)
const forks = computed(() => currentRepositoryData.value.forks)
// const subscribers = computed(() => currentRepositoryData.value.subscribers)

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
// const facebookUrl = null

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

    return otherLinks.flat().map(url => [{
        url,
        label: getUrlDomainName(url)
    }])
})

const imageUrl = computed(() => currentRepositoryData.value.coinId.image.large)
</script>

<style lang="sass" scoped>
:deep(a)
    @apply text-green-400
</style>