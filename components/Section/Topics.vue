<template>
    <div class="mt-10 border border-green-900 rounded-md max-w-xs">
        <TileWrap>
            <NuxtLinkExtended to="/topics">Topics</NuxtLinkExtended>
        </TileWrap>
        <TileWrap>
            <div v-if="topics.length" class="flex justify-start flex-wrap gap-2">
                <UiTopic
                    v-for="topic in topics"
                    :key="topic[0]"
                    :topic="topic[0]"
                >
                    {{topic.join(' - ')}}
                </UiTopic>
            </div>
        </TileWrap>
    </div>
</template>

<script lang="ts" setup>
const topicsResult = useNuxtData('topics')
const topics = topicsResult.data.value
</script>