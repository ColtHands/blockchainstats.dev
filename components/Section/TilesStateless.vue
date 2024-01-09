<template>
    <UiTileSectionWrap>
        <TileWrap class="rounded-t-md justify-between">
            <div>
                Top projects by stars this week, for more refined query go to <NuxtLink to="/projects" class="text-green-400">projects</NuxtLink>.
            </div>
        </TileWrap>
        <Tile
            v-for="repository in repositories.repositories"
            :key="repository.id"
            :avatar-url="repository.avatar_url"
            :name="repository.repository"
            :owner="repository.owner"
            :url="repository._id"
            :description="repository.coinId.description['en']"
            :stars="repository?.growth.week.stars"
            :forks="repository?.growth.week.forks"
            :open-issues="repository.growth.week.open_issues"
            :homepage="filterOutEmptyStrings(repository.coinId.links.homepage)[0]"
        />
    </UiTileSectionWrap>
</template>

<script lang="ts" setup>
const repositories = await useApi().getRepositories(true) as Ref<any>
</script>