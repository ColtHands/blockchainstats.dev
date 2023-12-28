<template>
    <div class="text-center">
        <div class="text-5xl font-bold mt-8 flex justify-center gap-5">
            <i class="fa-solid fa-tags"></i>
            <h1>1234 topics in database</h1>
        </div>
        <h2 class="text-xl text-center mt-5">
            Those are tags, but GitHub names these entities topics, we're calling them topics to be consistent.
        </h2>
    </div>
    <SectionTopicsExtended />
    <div class="mt-10 border border-green-900 rounded-md">
        <TileWrap>
            <div>
                <i class="fa-solid fa-tags"></i> Topics
            </div>
        </TileWrap>
        <TileWrap>
            topics - {{topics}}
        </TileWrap>
        <TileWrap v-for="topic in topics" :key="topic[0]">
            {{topic}}
        </TileWrap>
    </div>
</template>

<script setup lang="ts">
const topics = await useApi().getTopics()
</script>