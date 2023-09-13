<template>
    <NuxtLayout>
        <UiHeader />
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
    ],
    link: [
        {
            href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            rel: 'stylesheet'
        }
    ]
})
</script>

<style lang="css">
html, body {
    background: var(--bgc);
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    color: var(--color-dark);
    font-size: 16px;
}
</style>