<template>
    <!-- <pre>{{props}}</pre> -->
    <div class="border-b border-cyan-800 flex gap-10 items-center w-full p-5">
        <div>
            <UAvatar size="xl" :src="repository.avatar_url" class="h-20 w-20" />
        </div>
        <div>
            <div class="flex gap-2 justify-start">
                <NuxtLink to="">{{repository[appConfig.populatedRepositoryField].name}}</NuxtLink>
                <NuxtLink :to="repository._id" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </NuxtLink>
            </div>
            <div>description</div>
        </div>
        <div class="ml-auto text-right text-sm flex flex-col gap-1.5 content-center">
            <div title="stars"><i class="text-xs fa-solid fa-star-half-stroke"></i> {{stars}}</div>
            <div title="forks"><i class="text-xs fa-solid fa-code-fork"></i> {{forks}}</div>
            <div title="issues"><i class="text-xs fa-regular fa-circle-dot"></i> {{issues}}</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        repository: {
            type: Object,
            default: () => {}
        }
    },
    setup() {
        const appConfig = useAppConfig()

        return {
            appConfig
        }
    },
    computed: {
        stars(): string | 0 {
            const stars = this.$props.repository.growth.month.stars
            const sign = stars > 0 ? '+' : '-'

            return stars === 0 ? stars : `${sign}${Math.abs(stars)}`
        },
        forks(): string | 0 {
            const forks = this.$props.repository.growth.month.forks
            const sign = forks > 0 ? '+' : '-'

            return forks === 0 ? forks : `${sign}${Math.abs(forks)}`
        },
        issues(): string | 0 {
            const issues = this.$props.repository.growth.month.open_issues
            const sign = issues > 0 ? '+' : '-'

            return issues === 0 ? issues : `${sign}${Math.abs(issues)}`
        }
    }
}


</script>