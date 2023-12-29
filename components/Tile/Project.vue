<template>
    <TileWrap>
        <div>
            <UAvatar size="xl" :src="avatarUrl" class="h-20 w-20" />
        </div>
        <div>
            <div class="flex gap-2 justify-start items-center">
                <NuxtLink class="text-green-400" :to="`/projects/${owner}/${name}`">
                    <h3 class="text-xl">{{name}}</h3>
                </NuxtLink>
                <NuxtLink :to="url" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </NuxtLink>
                <NuxtLink v-if="homepage" :to="homepage" target="_blank">
                    <i class="fa-solid fa-house"></i>
                </NuxtLink>
            </div>
            <p class="line-clamp-2 overflow-hidden max-w-md text-sm mt-1" :title="description">
                {{description}}
            </p>
            <div v-if="topics?.length" class="mt-2 flex gap-2">
                <UiTopic
                    v-for="topic in topics.slice(0, 4)"
                    :key="topic"
                    :topic="topic"
                    size="xs"
                />
            </div>
        </div>
        <div class="ml-auto text-right text-sm flex flex-col gap-1.5 content-center">
            <div title="stars" class="whitespace-nowrap"><i class="text-xs fa-solid fa-star-half-stroke"></i> {{stars}}</div>
            <div title="forks" class="whitespace-nowrap"><i class="text-xs fa-solid fa-code-fork"></i> {{forks}}</div>
            <div title="issues" class="whitespace-nowrap"><i class="text-xs fa-regular fa-circle-dot"></i> {{issues}}</div>
        </div>
    </TileWrap>
</template>

<script lang="ts" setup>
type Props = {
    avatarUrl: string
    name: string
    owner: string
    url: string
    description: string
    stars: number
    forks: number
    openIssues: number
    homepage: string
    topics: string[]
}

const props = defineProps<Props>()

const stars = computed(() => addPlusMinus(props.stars))
const forks = computed(() => addPlusMinus(props.forks))
const issues = computed(() => addPlusMinus(props.openIssues))
</script>