<template>
    <div class="flex justify-center flex-col mt-10 gap-0 w-full sm:w md:w-3/3 lg:w-2/4 xl:w-3/5 mx-auto backdrop-blur border border-green-900 rounded-md">
        <TileWrap class="rounded-t-md justify-between">
            <div>
                Top {{selectedLimit || 10}} projects by {{selectedSortBy || 'stars'}} this {{selectedTimeFrame || 'week'}}
            </div>
            <div class="flex gap-2">
                <USelect
                    v-model="selectedTimeFrame"
                    placeholder="Time frame"
                    :loading="false"
                    :options="['week', 'month']"
                    class="w-30"
                >
                    <template #trailing>
                        <UIcon name="i-heroicons-calendar" />
                    </template>
                </USelect>
                <USelect
                    v-model="selectedSortBy"
                    placeholder="Sort by"
                    :loading="false"
                    :options="['stars', 'forks', 'issues']"
                    class="w-24 capitalize"
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
                        <UIcon name="i-heroicons-chevron-down" />
                    </template>
                </USelect>
            </div>
        </TileWrap>
        <ClientOnly>
            <div v-if="loading">loading</div>
            <template v-else>
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
            </template>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
// TODO Consider refactoring with pinia and or splitting into smaller components
const selectedSortBy = ref('')
const selectedLimit = ref('')
const selectedTimeFrame = ref('')
const loading = ref(false)
const repositories: Ref<Array<any>> = ref([])

const fetchRepos = async () => {
    loading.value = true

    const repos = await useApi().getRepositories(
        true,
        parseInt(unref(selectedLimit)),
        unref(selectedTimeFrame),
        unref(selectedSortBy)
    ) as any

    loading.value = false
    repositories.value = unref(repos)
}

await fetchRepos()

watch([selectedSortBy, selectedLimit, selectedTimeFrame], fetchRepos)
</script>