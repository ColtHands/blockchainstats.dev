<template>
    <NuxtLayout name="main">
        <h1 class="text-3xl font-bold underline">
            this is blockchain developer stats frontend project
        </h1>
        <div>
            data from api - {{u}}
            asdflol

            hello bro
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const repositories = await useApi().getRepositories()

</script>