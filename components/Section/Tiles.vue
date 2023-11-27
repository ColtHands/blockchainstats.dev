<template>
    <div class="flex justify-center flex-col mt-10 gap-0 w-full sm:w md:w-3/3 lg:w-2/4 xl:w-3/5 mx-auto backdrop-blur border border-green-900 rounded-md">
        <TileWrap class="rounded-t-md justify-between">
            <div>
                Top projects by stars this week
            </div>
            <div class="flex gap-2">
                <USelect
                    v-model="selectedSortType"
                    placeholder="Sort by"
                    :loading="false"
                    :options="['Stars', 'Forks', 'Issues']"
                    class="w-24"
                >
                    <template #trailing>
                        <UIcon name="i-heroicons-arrows-up-down-20-solid" />
                    </template>
                </USelect>
                <USelect
                    v-model="selectedLimit"
                    placeholder="Limit"
                    :loading="false"
                    :options="['10', '25', '50']"
                    class="w-18"
                >
                    <template #trailing>
                        <UIcon name="i-heroicons-arrows-up-down-20-solid" />
                    </template>
                </USelect>
            </div>
        </TileWrap>
        <ClientOnly>
            <Tile
                v-for="repository in repositories"
                :key="repository.id"
                variant="project"
                :avatar-url="repository.avatar_url"
                :name="repository.repository"
                :owner="repository.owner"
                :url="repository._id"
                :description="repository.coinId.description['en']"
                :stars="repository?.growth.week.stars"
                :forks="repository?.growth.week.forks"
                :open-issues="repository.growth.week.open_issues"
                :homepage="filterOutEmptyStrings(repository.coinId.links.homepage)[0]"
            />
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
const selectedSortType = ref('')
const selectedLimit = ref('')

const repositories: Ref<Array<any>> = ref([])

/**
 * This happens in client, need to happen in ssr
 * To avoid content mismatch ClientOnly component had to be used
 * FIXME Fix this so first render happens in ssr mode, maybe, should it?
 */
const fetchRepos = async () => {
    const repos = await useApi().getRepositories(true, parseInt(selectedLimit.value)) as any

    repositories.value = unref(repos)
}

await fetchRepos()

watch(selectedSortType, fetchRepos)
watch(selectedLimit, fetchRepos)
</script>