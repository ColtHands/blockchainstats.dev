<template>
    <div>
        <div class="text-5xl font-bold mt-8 flex justify-start gap-5">
            <i class="fa-solid fa-tags"></i>
            <h1>1234 topics in database</h1>
        </div>
        <h2 class="text-xl mt-5">
            Those are tags, but GitHub names these entities topics, we're calling them topics to be consistent.
        </h2>
        <p>
            Topics that have only 1 repository under that topic are excluded
        </p>
    </div>
    <SectionTopicsExtended />
    <div class="mt-10 border border-green-900 rounded-md">
        <TileWrap>
            <div>
                <i class="fa-solid fa-tags"></i> Topics
            </div>
        </TileWrap>
        <TileWrap v-for="topic in topics" :key="topic[0]" :with-padding="false">
            <NuxtLinkExtended class="flex items-center gap-2 w-full p-5" :to="`/projects?topics=${topic[0]}`">
                <span>{{topic[0]}}</span>
                <UBadge size="xs" color="pink">{{topic[1]}}</UBadge>
            </NuxtLinkExtended>
        </TileWrap>
    </div>
</template>

<script setup lang="ts">
const topics = await useApi().getTopics(10000)
</script>