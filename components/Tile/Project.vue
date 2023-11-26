<template>
    <!-- <pre>{{$props}}</pre> -->
    <TileWrap>
        <div>
            <UAvatar size="xl" :src="avatarUrl" class="h-20 w-20" />
        </div>
        <div>
            <div class="flex gap-2 justify-start items-center">
                <NuxtLink class="text-xl text-green-400" :to="`projects/${owner}/${name}`">
                    {{name}}
                </NuxtLink>
                <NuxtLink :to="url" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </NuxtLink>
                <NuxtLink to="homepage">
                    <i class="fa-solid fa-house"></i>
                </NuxtLink>
            </div>
            <p class="line-clamp-2 overflow-hidden max-w-md text-sm mt-1" :title="description">
                {{description}}
            </p>
        </div>
        <div class="ml-auto text-right text-sm flex flex-col gap-1.5 content-center">
            <div title="stars"><i class="text-xs fa-solid fa-star-half-stroke"></i> {{stars}}</div>
            <div title="forks"><i class="text-xs fa-solid fa-code-fork"></i> {{forks}}</div>
            <div title="issues"><i class="text-xs fa-regular fa-circle-dot"></i> {{issues}}</div>
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
}

const props = defineProps<Props>()
const stars = computed(() => addPlusMinus(props.stars))
const forks = computed(() => addPlusMinus(props.forks))
const issues = computed(() => addPlusMinus(props.openIssues))
</script>