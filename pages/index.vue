<template>
    <div class="text-5xl font-bold mt-8 flex justify-center gap-5">
        <i class="fa-solid fa-cube"></i>
        <h1>{{title}}</h1>
    </div>
    <h2 class="text-xl text-center mt-5">
        This website display top blockchain <NuxtLink to="https://github.com/" target="_blank" class="text-green-400">GitHub</NuxtLink> projects and its statistics
    </h2>
    <SectionTilesStateless />
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const title = runtimeConfig.public.title
</script>