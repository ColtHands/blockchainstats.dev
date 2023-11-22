<template>
    <NuxtLayout name="main">
        <h1 class="text-5xl font-bold text-center mt-5">
            Blockchain Developer Stats
        </h1>
        <h2 class="text-xl text-center mt-5">
            This project shows top blockchain github projects
        </h2>
        <div class="flex justify-center flex-col mt-5 gap-3 w-full sm:w md:w-3/3 lg:w-2/4 xl:w-3/5 p-4 mx-auto backdrop-blur border border-cyan-800 rounded-md">
            <UiProjectTile
                v-for="repository in repositories"
                :key="repository.id"
                :repository="repository"
            />
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const repositories = await useApi().getRepositories().then(e => e.data) as any
</script>