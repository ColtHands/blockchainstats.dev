<template>
    <NuxtLayout name="container">
        <div class="text-5xl font-bold mt-8 flex justify-center gap-5">
            <i class="fa-solid fa-cube"></i>
            <h1>Blockchain Developer Stats</h1>
        </div>
        <h2 class="text-xl text-center mt-5">
            This website display top blockchain <NuxtLink to="https://github.com/" target="_blank">GitHub</NuxtLink> projects and its statistics
        </h2>
        <div class="flex justify-center flex-col mt-10 gap-0 w-full sm:w md:w-3/3 lg:w-2/4 xl:w-3/5 mx-auto backdrop-blur border border-green-900 rounded-md">
            <TileWrap class="rounded-t-md justify-between">
                <div>
                    Top projects by stars this week
                </div>
                <!-- <div>
                    Sort stuff goes here
                </div> -->
            </TileWrap>
            <Tile
                v-for="repository in repositories"
                :key="repository.id"
                :avatar-url="repository.avatar_url"
                :name="repository.repository"
                :owner="repository.owner"
                :url="repository._id"
                :description="repository.coinId.description['en']"
                :stars="repository.growth.week.stars"
                :forks="repository.growth.week.forks"
                :open-issues="repository.growth.week.open_issues"
                variant="project"
                class="first:rounded-t-md last:rounded-b-sm"
            />
        </div>
    </NuxtLayout>
</template>

<script lang="ts">
export default {
    async setup() {
        const repositories = await useApi().getRepositories(true) as any

        return {
            repositories
        }
    }
}
</script>