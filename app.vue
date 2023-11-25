<template>
    <Header />
    <NuxtPage />
</template>

<script lang="ts" setup>
useHead({
    title: 'Blockchain Developer Stats',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Blockchain Developer Stats'
        }
    ],
    link: [
        {
            href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,1000,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            rel: 'stylesheet'
        }
    ],
    script: [
        {
            src: 'https://kit.fontawesome.com/1d54e15326.js',
            defer: true,
            crossorigin: 'anonymous'
        }
    ]
})
</script>

<style lang="sass">
html, body
    @apply bg-slate-900
    background-repeat: no-repeat
    background-size: contain
    width: 100%
    height: 100%
    font-family: 'Montserrat', sans-serif
    color: var(--color-light)
    font-size: 16px
</style>