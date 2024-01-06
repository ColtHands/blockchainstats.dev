<template>
    <header class="py-6 w-full backdrop-blur border-b border-cyan-950">
        <div class="sm:container sm:mx-auto px-4 flex justify-between items-center">
            <NuxtLinkExtended class="font-bold text-2xl" :title="runtimeConfig.public.title" to="/">
                <i class="fa-solid fa-cube"></i> <span class="max-sm:hidden">BDS</span>
            </NuxtLinkExtended>

            <HeaderSearchBar class="max-md:hidden md:w-72"></HeaderSearchBar>

            <nav class="flex justify-center gap-2 md:gap-4 text-sm">
                <NuxtLinkExtended
                    v-for="{title,path} in useAppConfig().navigationLinks"
                    :key="path"
                    :to="path"
                >
                    {{title}}
                </NuxtLinkExtended>
            </nav>

            <div class="flex justify-center gap-2 md:gap-4 text-xl">
                <NuxtLinkExtended to="https://github.com/ColtHands/blockchain-developer-stats-frontend"><i class="fa-brands fa-github"></i></NuxtLinkExtended>
                <NuxtLinkExtended to="https://twitter.com/0xColtHands/"><i class="fa-brands fa-x-twitter"></i></NuxtLinkExtended>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
</script>