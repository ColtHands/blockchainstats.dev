<template>
    <footer class="border-t border-cyan-950">
        <div class="mx-auto py-5 grid grid-cols-3 items-center text-center w-full sm:w md:w-3/3 lg:w-2/4 xl:w-3/5">
            <NuxtLinkExtended to="/">
                <i class="fa-solid fa-cube text-green-400 text-5xl"></i>
            </NuxtLinkExtended>
            <nav>
                <p class="text-xs text-gray-500">Links</p>
                <ul class="flex justify-center gap-3 mt-1">
                    <li v-for="{title,path} in useAppConfig().navigationLinks" :key="path">
                        <NuxtLinkExtended :to="path">
                            {{title}}
                        </NuxtLinkExtended>
                    </li>
                </ul>
            </nav>
            <div class="flex justify-center gap-2">
                <NuxtLinkExtended to="https://github.com/ColtHands/blockchain-developer-stats-frontend" class="text-2xl"><i class="fa-brands fa-github"></i></NuxtLinkExtended>
                <NuxtLinkExtended to="https://twitter.com/0xColtHands" class="text-2xl"><i class="fa-brands fa-x-twitter"></i></NuxtLinkExtended>
            </div>
        </div>
        <div class="border-t border-cyan-950 py-2 text-center text-gray-500 text-sm">
            Built by Aleksei Karpenko
            •
            <NuxtLink to="https://colthands.dev" class="text-green-400">colthands.dev</NuxtLink>
            •
            <NuxtLink to="https://www.linkedin.com/in/aleksey-karpenko/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </NuxtLink>
        </div>
    </footer>
</template>