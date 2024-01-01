<template>
    <div class="flex justify-center flex-col mt-10 mx-5 gap-0 w-full sm:w md:w-3/3 lg:w-2/4 xl:w-3/5 backdrop-blur border border-green-900 rounded-md">
        <TileWrap class="rounded-t-md justify-between">
            <div>
                Top {{limit}} projects by {{sortBy || 'stars'}} this {{timeFrame || 'week'}}
            </div>
            <div class="flex gap-2">
                <USelect
                    v-model="timeFrame"
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
                    v-model="sortBy"
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
                    v-model="limit"
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
            <div v-if="loading">
                <TileSkeleton v-for="idx in limit === '' ? 10 : Number(limit)" :key="idx" />
            </div>
            <template v-else>
                <Tile
                    v-for="repository in repositories"
                    :key="repository.id"
                    :avatar-url="repository.avatar_url"
                    :name="repository.repository"
                    :owner="repository.owner"
                    :url="repository._id"
                    :description="repository.coinId.description['en']"
                    :stars="repository?.growth.week.stars"
                    :forks="repository?.growth.week.forks"
                    :open-issues="repository.growth.week.open_issues"
                    :homepage="filterOutEmptyStrings(repository.coinId.links.homepage)[0]"
                    :topics="repository.topics"
                />
            </template>
        </ClientOnly>
        <TileWrap class="justify-end">
            <UPagination
                v-model="page"
                size="md"
                :total="100"
                :show-last="false"
                show-first
            />
        </TileWrap>
    </div>
</template>

<script lang="ts" setup>
const sortBy = ref('')
const limit = ref('')
const timeFrame = ref('')
const loading = ref(false)
const repositories = ref([]) as Ref<Array<any>>
const page = ref(1)

const limitComputed = unref(computed(() => unref(limit) === '' ? 10 : parseInt(unref(limit))))
const timeFrameComputed = unref(computed(() => unref(timeFrame) || 'week'))
const sortByComputed = unref(computed(() => unref(sortBy) || 'stars'))

const fetchRepos = async () => {
    loading.value = true

    const repos = await useApi().getRepositories(
        true,
        limitComputed,
        timeFrameComputed,
        sortByComputed,
        unref(page)
    ) as any

    loading.value = false
    repositories.value = unref(repos)
}

await fetchRepos()

watch([sortBy, limit, timeFrame, page], fetchRepos)
</script>