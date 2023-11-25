<template>
    <header class="py-6 w-full backdrop-blur border-b border-cyan-950">
        <div class="sm:container sm:mx-auto px-4 flex justify-between items-center">
            <NuxtLink class="font-bold text-2xl" title="Blockchain Developer Stats" to="/">
                <i class="fa-solid fa-cube"></i> BDS
            </NuxtLink>
            <HeaderSearchBar class="w-72"></HeaderSearchBar>
            <!-- TODO Add those animations to MyNuxtLink component -->
            <nav class="flex justify-center gap-4">
                <NuxtLink class="hover:text-green-400 transition-colors" to="/projects">Projects</NuxtLink>
                <NuxtLink class="hover:text-green-400 transition-colors" to="/about">About</NuxtLink>
                <NuxtLink class="hover:text-green-400 transition-colors" to="/tags">Tags</NuxtLink>
                <NuxtLink class="hover:text-green-400 transition-colors" to="/coins">Coins</NuxtLink>
            </nav>
            <div class="flex justify-center gap-4">
                <NuxtLink class="hover:text-green-400 transition-colors" to="github.com"><i class="fa-brands fa-github"></i></NuxtLink>
                <NuxtLink class="hover:text-green-400 transition-colors" to="twitter.com"><i class="fa-brands fa-x-twitter"></i></NuxtLink>
            </div>
        </div>
    </header>
</template>