<template>
    <TileWrap class="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start">
        <NuxtLink :to="`/projects/${owner}/${name}`">
            <UAvatar
                v-if="avatarUrl"
                size="xl"
                :src="avatarUrl"
                class="max-sm:hidden"
            />
        </NuxtLink>
        <div>
            <div class="flex gap-2 justify-start items-center flex-wrap">
                <NuxtLink class="text-green-400 flex justify-start gap-2" :to="`/projects/${owner}/${name}`">
                    <UAvatar
                        v-if="avatarUrl"
                        size="xs"
                        :src="avatarUrl"
                        class="sm:hidden"
                    />
                    <h3 class="text-xl whitespace-nowrap">{{name}}</h3>
                </NuxtLink>
                <NuxtLink :to="url" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </NuxtLink>
                <NuxtLink v-if="homepage" :to="homepage" target="_blank">
                    <i class="fa-solid fa-house"></i>
                </NuxtLink>
            </div>
            <p class="line-clamp-2 overflow-hidden max-w-md text-sm mt-1">
                <ClientOnly>
                    {{description}}
                </ClientOnly>
            </p>
            <div v-if="topics?.length" class="mt-2 flex gap-2 max-xs:hidden">
                <UiTopic
                    v-for="topic in visibleTopics"
                    :key="topic"
                    :topic="topic"
                    size="xs"
                />
                <UiTopic
                    v-if="topics.length > topicsVisibleLength"
                    size="sm"
                >
                    <span>+{{topics.length - topicsVisibleLength}}</span>
                </UiTopic>
            </div>
        </div>
        <div class="sm:ml-auto text-right text-sm flex justify-start max-sm:w-full sm:flex-col max-sm:gap-3 gap-1.5 sm:content-center">
            <div title="stars" class="whitespace-nowrap"><i class="text-xs fa-solid fa-star-half-stroke"></i> {{stars}}</div>
            <div title="forks" class="whitespace-nowrap"><i class="text-xs fa-solid fa-code-fork"></i> {{forks}}</div>
            <div title="issues" class="whitespace-nowrap"><i class="text-xs fa-regular fa-circle-dot"></i> {{issues}}</div>
        </div>
    </TileWrap>
</template>

<script lang="ts" setup>
// TODO Figure out why <p>{{description}}</p> has "Hydration text mismatch" and needs <ClientOnly> component
type Props = {
    avatarUrl?: string
    name: string
    owner: string
    url: string
    description: string
    stars: number
    forks: number
    openIssues: number
    homepage: string
    topics?: string[]
}

const props = defineProps<Props>()

const topicsVisibleLength = 3
const visibleTopics = computed(() => props.topics?.length ? props.topics.slice(0, topicsVisibleLength) : [])
const stars = computed(() => addPlusMinus(props.stars))
const forks = computed(() => addPlusMinus(props.forks))
const issues = computed(() => addPlusMinus(props.openIssues))
</script>