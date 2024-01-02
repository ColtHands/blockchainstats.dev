<template>
    <div class="mt-10 border border-green-900 rounded-md max-w-xs">
        <TileWrap>
            <div>
                <i class="fa-solid fa-tags text-sm mr-2"></i>
                <NuxtLinkExtended :always-on="true" to="/topics">Topics</NuxtLinkExtended>
            </div>
        </TileWrap>
        <TileWrap v-if="topics.length" :with-padding="false">
            <div class="flex flex-col justify-start flex-wrap">
                <NuxtLink
                    v-for="topic in topics"
                    :key="topic._id"
                    :title="topic.description"
                    :to="`/projects?topics=${topic._id}`"
                    class="px-3 py-2 flex justify-between border-b last:border-0 border-teal-800 gap-10 w-60 hover:text-green-400"
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
</script>