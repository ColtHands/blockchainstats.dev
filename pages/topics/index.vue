<template>
    <div>
        <div class="text-5xl font-bold mt-8 flex justify-start gap-5">
            <i class="fa-solid fa-tags"></i>
            <h1>{{topicsCount}} topics in database</h1>
        </div>
        <h2 class="text-xl mt-5">
            Those are tags, but GitHub names these entities topics, we're calling them topics to be consistent.
        </h2>
        <p>
            Topics that have only 1 repository under that topic are excluded
        </p>
    </div>

    <div class="mt-10 border border-green-900 rounded-md">
        <TileWrap>
            <div><i class="fa-solid fa-tags"></i> Topics</div>
        </TileWrap>

        <template v-if="loading">
            <TileWrap v-for="i in 10" :key="i">
                <div class="flex flex-col gap-2">
                    <USkeleton class="w-32 h-4" :ui="{ background: 'dark:bg-slate-500' }" />
                    <USkeleton class="w-96 h-3" :ui="{ background: 'dark:bg-slate-500' }" />
                    <USkeleton class="w-64 h-3" :ui="{ background: 'dark:bg-slate-500' }" />
                </div>
            </TileWrap>
        </template>

        <template v-else>
            <TileWrap v-for="topic in topics" :key="topic._id" :with-padding="false">
                <div class="p-5 w-1/2 max-sm:w-full">
                    <div class="flex items-center gap-2">
                        <NuxtLinkExtended :to="`/projects?topics=${topic._id}`" always-on>{{topic.display_name || topic._id}}</NuxtLinkExtended>
                        <UBadge
                            v-if="topic.repositories?.length"
                            size="xs"
                            color="pink"
                            class="cursor-default"
                            :title="`${topic.repositories.length} total repositories under this topic`"
                        >
                            {{topic.repositories?.length}}
                        </UBadge>
                    </div>

                    <p class="text-sm line-clamp-2 overflow-hidden mt-2">
                        <span v-if="topic.description">{{topic.description}}</span>
                        <span v-else-if="topic.short_description">{{topic.short_description}}</span>
                        <span v-else class="text-gray-500">No description...</span>
                    </p>
                </div>

                <div class="flex justify-end gap-2 w-1/2 p-5 max-sm:hidden">
                    <NuxtLink
                        v-for="repo in topic.repositories.slice(0, 5)"
                        :key="repo.repository"
                        :to="`/projects/${repo.owner}/${repo.repository}`"
                        :title="repo.repository"
                    >
                        <UAvatar :src="repo.avatar_url" class="bg-green-300" />
                    </NuxtLink>
                </div>
            </TileWrap>
        </template>

        <TileWrap class="justify-end p-5 max-">
            <UPagination
                v-model="page"
                :total="topicsCount || 100"
                size="md"
                class="max-xs:mx-auto"
                :max="5"
            />
        </TileWrap>
    </div>
</template>

<script setup lang="ts">
const { getTopicsCount, getTopics } = useApi()

const loading = ref(false)
const page = ref(1)
const topics = ref<any[]>([])

const topicsCount = await getTopicsCount() as Ref<number>

const getTopicsLocal = async () => {
    loading.value = true
    const limit = 10
    const offset = (unref(page) * limit) - limit
    const topicsResult = await getTopics(limit, offset) as any
    topics.value = unref(topicsResult)
    loading.value = false
}

watch([page], getTopicsLocal, { immediate: true })
</script>