<template>
    <NuxtLayout name="main">
        <div class="text-5xl font-bold text-center mt-8 flex justify-center gap-5">
            <i class="fa-solid fa-cube"></i>
            <h1>Blockchain Developer Stats</h1>
        </div>
        <h2 class="text-xl text-center mt-5">
            This project shows top blockchain github projects
        </h2>
        <div class="flex justify-center flex-col mt-10 gap-3 w-full sm:w md:w-3/3 lg:w-2/4 xl:w-3/5 mx-auto backdrop-blur border border-cyan-800 rounded-md">
            <UiProjectTile
                v-for="repository in repositories"
                :key="repository.id"
                :repository="repository"
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