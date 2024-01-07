<template>
    <div class="mt-10 border border-green-900 rounded-md max-lg:w-full lg:max-w-xs">
        <TileWrap>
            <div>
                <i class="fa-solid fa-tags text-sm mr-2"></i>
                <NuxtLinkExtended :always-on="true" to="/topics">Topics</NuxtLinkExtended>
            </div>
        </TileWrap>
        <TileWrap v-if="topics.length" :with-padding="false">
            <div class="flex flex-col justify-start flex-wrap w-full">
                <NuxtLink
                    v-for="topic in topics"
                    :key="topic._id"
                    :title="topic.description"
                    :to="topic._id === topicsRef ? '/projects' : `/projects?topics=${topic._id}`"
                    class="px-3 py-2 flex justify-between border-b last:border-0 border-teal-800 gap-10 w-full"
                    :class="[{
                        'hover:text-green-400': topic._id !== topicsRef },{
                        'text-red-400': topic._id === topicsRef
                    }]"
                >
                    <span class="text-inherit">{{topic.display_name || topic._id}}</span>
                    <span class="text-sm text-gray-400">{{topic.repositories.length}}</span>
                </NuxtLink>
            </div>
        </TileWrap>
    </div>
</template>

<script lang="ts" setup>
const topicsResult = useNuxtData('topics')
const topics = topicsResult.data.value
const route = useRoute()
const topicsRef: Ref<unknown> = ref(route.query.topics)

watch(() => route.query.topics, topicsFromQuery => {
    topicsRef.value = topicsFromQuery
})
</script>