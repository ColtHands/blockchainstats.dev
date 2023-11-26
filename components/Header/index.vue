<template>
    <header class="py-6 w-full backdrop-blur border-b border-cyan-950">
        <div class="sm:container sm:mx-auto px-4 flex justify-between items-center">
            <NuxtLinkExtended class="font-bold text-2xl" title="Blockchain Developer Stats" to="/">
                <i class="fa-solid fa-cube"></i> BDS
            </NuxtLinkExtended>

            <HeaderSearchBar class="w-72"></HeaderSearchBar>

            <nav class="flex justify-center gap-4">
                <NuxtLinkExtended to="/projects">Projects</NuxtLinkExtended>
                <NuxtLinkExtended to="/about">About</NuxtLinkExtended>
                <NuxtLinkExtended to="/tags">Tags</NuxtLinkExtended>
                <NuxtLinkExtended to="/coins">Coins</NuxtLinkExtended>
            </nav>

            <div class="flex justify-center gap-4">
                <NuxtLinkExtended to="github.com" class="text-xl"><i class="fa-brands fa-github"></i></NuxtLinkExtended>
                <NuxtLinkExtended to="twitter.com" class="text-xl"><i class="fa-brands fa-x-twitter"></i></NuxtLinkExtended>
            </div>
        </div>
    </header>
</template>