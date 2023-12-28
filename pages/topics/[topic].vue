<template>
    <div class="text-5xl font-bold mt-8 flex justify-center gap-5">
        <i class="fa-solid fa-chart-bar"></i>
        <h1>Total {{repositoriesCount ?? '...'}} projects in database</h1>
    </div>
    <div class="flex justify-center items-start">
        <SectionTilesStateless />
        <SectionTopics />
    </div>
</template>

<script lang="ts" setup>
const getCount = await useApi().getRepositoriesCount()

const repositoriesCount = useState('repositoriesCount', () => getCount)

await useApi().getTopics()
</script>