<template>
    <div>
        <UiPageTitleWrap>
            <h1>{{title}}</h1>
        </UiPageTitleWrap>

        <h2 class="text-xl md:text-center mt-5">
            This website displays top blockchain <NuxtLink to="https://github.com/" target="_blank" class="text-green-400">GitHub</NuxtLink> projects and its statistics
        </h2>

        <UiMainProjectsWrap>
            <SectionTilesStateless />
            <SectionTopics />
        </UiMainProjectsWrap>

        <div class="mt-10">
            <p>This application displays trends in GitHub stars, forks and open issues. More on that in <NuxtLinkExtended always-on to="/about">about</NuxtLinkExtended> page</p>
            <p>This app is completely free, and operates strictly on open source, thus <NuxtLinkExtended always-on to="https://www.buymeacoffee.com/colthands">donations</NuxtLinkExtended> are highly appreciated ❤️</p>
        </div>

        <div class="mt-2">
            <a href="https://www.buymeacoffee.com/colthands">
                <img class="h-10" src="https://img.buymeacoffee.com/button-api/?text=Buy my a coffee&emoji=❤️&slug=colthands&button_colour=BD5FFF&font_colour=ffffff&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00" />
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const title = runtimeConfig.public.title

await useApi().getTopics()
</script>