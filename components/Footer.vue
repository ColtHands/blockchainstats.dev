<template>
    <footer class="border-t border-cyan-950 py-5">
        <div class="mx-auto grid grid-cols-3 items-center text-center w-full sm:w md:w-3/3 lg:w-2/4 xl:w-3/5">
            <NuxtLinkExtended to="/">
                <i class="fa-solid fa-cube text-green-400 text-5xl"></i>
            </NuxtLinkExtended>
            <nav>
                <ul>
                    <li><NuxtLinkExtended to="/projects">Projects</NuxtLinkExtended></li>
                    <li><NuxtLinkExtended to="/about">About</NuxtLinkExtended></li>
                    <li><NuxtLinkExtended to="/tags">Tags</NuxtLinkExtended></li>
                    <li><NuxtLinkExtended to="/coins">Coins</NuxtLinkExtended></li>
                </ul>
            </nav>
            <div class="flex justify-center gap-2">
                <NuxtLinkExtended to="github.com" class="text-2xl"><i class="fa-brands fa-github"></i></NuxtLinkExtended>
                <NuxtLinkExtended to="twitter.com" class="text-2xl"><i class="fa-brands fa-x-twitter"></i></NuxtLinkExtended>
            </div>
        </div>
    </footer>
</template>