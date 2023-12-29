<template>
    <div>
        <h1 class="text-4xl font-bold mt-6 mb-8">About {{title}}</h1>

        <UCard>
            <p class="text-xl font-medium">Why does this webapp exist?</p>
            <p>Cryptocurrency and blockchain world for that matter is still somewhat niche outside of bitcoin and ethereum, but it's here to stay and new developers are building things all of the time.</p>
            <p>{{title}} webapp exists with a purpose of getting information and patterns.</p>
            <p>Right now there is not concise way out there of getting information on what cryptocurrency developers build, how much traction (stats) this and that repository is getting.</p>
            <p>This app can help you get a sense of trends and patterns, which developers are abandoned their project, and who's staying consistent</p>

            <br>

            <p class="text-xl font-medium">How it works?</p>
            <p>Each day a script runs through a list of ~10,000 repositories, gets their data from GitHub API for that day and saves it into timeseries DB</p>
            <p>The only changes it tracks is: stars, forks and open issues</p>
            <p>And that's what you see on frontend, most starred / forked / issued repositories, this week or month</p>

            <br>

            <p class="text-xl font-medium">Why just not use GitHub API.</p>
            <p>GitHub API is strong, but it only provides up-to-date information, it doesn't provide historical info.</p>
            <p>Additionally there's a lot more info to be collected than just GitHub one.</p>

            <br>

            <p class="text-xl font-medium">Tech Stack</p>
            <p>Backend uses <code>Node.js</code>, with <code>Express</code> server and <code>TypeScript</code>.</p>
            <p>Frontend is built with <code>Nuxt</code>, <code>Tailwind</code>, <code>NuxtUI</code> and <code>TypeScript</code> as well.</p>

            <br>

            <p class="text-xl font-medium">Want more features?</p>
            <p>You can always tweet me, now <i>x</i> me at <NuxtLinkExtended always-on to="https://twitter.com/0xColtHands/" target="_blank">twitter.com/0xColtHands</NuxtLinkExtended>.</p>

            <br>

            <p class="text-xl font-medium">Found bugs? Have suggestions?</p>
            <p>Open up a new issue in the repository issues <NuxtLinkExtended always-on to="https://github.com/ColtHands/blockchain-developer-stats-frontend/issues/new" target="_blank">here</NuxtLinkExtended>.</p>
            <p>Feel free to audit the code and post any suggestions to the issues or to my <NuxtLinkExtended always-on to="https://twitter.com/0xColtHands/" target="_blank">twitter (x)</NuxtLinkExtended></p>

            <br>

            <p class="text-xl font-medium">Found this project useful?</p>
            <p>You can <NuxtLinkExtended always-on to="https://www.buymeacoffee.com/colthands" target="_blank">buy-me-coffee</NuxtLinkExtended> 🙂</p>
            <div>
                <a href="https://www.buymeacoffee.com/colthands" class="w-auto inline-block">
                    <img class="h-10 w-auto" src="https://img.buymeacoffee.com/button-api/?text=Buy my a coffee&emoji=❤️&slug=colthands&button_colour=BD5FFF&font_colour=ffffff&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00" />
                </a>
            </div>

            <br>

            <p class="text-xl font-medium">Roadmap</p>
            <p>
                <ul class="list-disc pl-4">
                    <li>Add social stats: tweets, reddit, facebook, etc</li>
                    <li>Add BE -> FE TypeScript support (generate types)</li>
                    <li>Refactor BackEnd to <code>nitro</code> to support aws lambda</li>
                </ul>
            </p>

            <br>

            <p>NOTE: This website was <b>heavily</b> inspired by <NuxtLinkExtended to="https://bestofjs.org/about" target="_blank">bestofjs.org</NuxtLinkExtended>.</p>
        </UCard>
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const title = runtimeConfig.public.title
</script>

<style lang="sass" scoped>
code
    @apply text-red-400
</style>