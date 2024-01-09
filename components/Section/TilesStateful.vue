<template>
    <UiTileSectionWrap>
        <TileWrap class="rounded-t-md justify-between max-md:flex-col max-md:items-start max-md:gap-2">
            <div>
                Top {{limit}} projects by {{sortBy || 'stars'}} this {{timeFrame || 'week'}}
            </div>
            <div class="flex gap-2 max-xs:flex-col">
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
                    :stars="repository?.growth[timeFrameComputed].stars"
                    :forks="repository?.growth[timeFrameComputed].forks"
                    :open-issues="repository.growth[timeFrameComputed].open_issues"
                    :homepage="filterOutEmptyStrings(repository.coinId.links.homepage)[0]"
                    :topics="repository.topics"
                />
            </template>
        </ClientOnly>
        <TileWrap class="justify-end">
            <UPagination
                v-model="page"
                size="md"
                :total="count"
                :max="5"
                class="max-xs:mx-auto"
            />
        </TileWrap>
    </UiTileSectionWrap>
</template>

<script lang="ts" setup>
const route = useRoute()
const { getTopicsCount } = useApi()

const count: Ref<number> = ref(100)
const sortBy: Ref<'' | 'stars' | 'forks' | 'open_issues'> = ref('')
const limit = ref('')
const timeFrame: Ref<'week' | 'month' | ''> = ref('')
const loading: Ref<boolean> = ref(false)
const repositories = ref([]) as Ref<Array<any>>
const page: Ref<number> = ref(1)

const limitComputed = unref(computed(() => unref(limit) === '' ? 10 : parseInt(unref(limit))))
const timeFrameComputed = unref(computed(() => unref(timeFrame) || 'week'))
const sortByComputed = unref(computed(() => unref(sortBy) || 'stars'))

const fetchRepos = async (rawTopics: unknown) => {
    loading.value = true

    const repos = await useApi().getRepositories(
        true,
        limitComputed,
        timeFrameComputed,
        sortByComputed,
        unref(page),
        rawTopics
    ) as any

    loading.value = false
    repositories.value = unref(repos)
}

count.value = (await getTopicsCount() as Ref<number>).value

watch([sortBy, limit, timeFrame, page, () => route.query.topics], values => {
    const topics = values[4]
    fetchRepos(topics)
}, { immediate: true })
</script>