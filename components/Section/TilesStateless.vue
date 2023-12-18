<template>
    <div class="flex justify-center flex-col mt-10 mx-5 gap-0 w-full sm:w md:w-3/3 lg:w-2/4 xl:w-3/5 backdrop-blur border border-green-900 rounded-md">
        <TileWrap class="rounded-t-md justify-between">
            <div>
                Top projects by stars this week, for more refined query go to <NuxtLink to="/projects" class="text-green-400">projects</NuxtLink>.
            </div>
        </TileWrap>
        <Tile
            v-for="repository in repositories"
            :key="repository.id"
            variant="project"
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
    </div>
</template>

<script lang="ts" setup>
const repositories = await useApi().getRepositories(true) as any
</script>