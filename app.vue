<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script lang="ts">
useHead({
    title: 'Blockchain Developer Stats',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Blockchain Developer Stats'
        }
    ]
})
</script>

<style lang="sass">
@use '~~/assets/styles/variables.sass'

html, body
    background: variables.$bgc
    background-repeat: no-repeat
    background-size: contain
    width: 100%
    height: 100%
</style>