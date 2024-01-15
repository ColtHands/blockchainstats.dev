<template>
    <div>
        <UiPageTitleWrap>
            <i class="fa-solid fa-chart-bar"></i>
            <h1>Total {{repositoriesCount ?? '...'}} projects in database</h1>
        </UiPageTitleWrap>

        <UiMainProjectsWrap>
            <SectionTilesStateful />
            <SectionTopics />
        </UiMainProjectsWrap>
    </div>
</template>

<script lang="ts" setup>
const getCount = await useApi().getRepositoriesCount()

const repositoriesCount = useState('repositoriesCount', () => getCount)

await useApi().getTopics()
</script>