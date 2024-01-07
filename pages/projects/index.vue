<template>
    <UiPageTitleWrap>
        <i class="fa-solid fa-chart-bar"></i>
        <h1>Total {{repositoriesCount ?? '...'}} projects in database</h1>
    </UiPageTitleWrap>

    <div class="flex max-lg:flex-col justify-center items-start">
        <SectionTilesStateful />
        <SectionTopics />
    </div>
</template>

<script lang="ts" setup>
const getCount = await useApi().getRepositoriesCount()

const repositoriesCount = useState('repositoriesCount', () => getCount)

await useApi().getTopics()
</script>