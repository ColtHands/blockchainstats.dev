<template>
    <div class="flex justify-center flex-col mt-10 gap-0 w-full sm:w md:w-3/3 lg:w-2/4 xl:w-3/5 mx-auto backdrop-blur border border-green-900 rounded-md">
        <TileWrap class="rounded-t-md justify-between">
            <div>
                Top {{state.limit.value || 10}} projects by {{state.sortBy.value || 'stars'}} this {{state.timeFrame.value || 'week'}}
            </div>
            <div class="flex gap-2">
                <USelect
                    v-model="state.timeFrame.value"
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
                    v-model="state.sortBy.value"
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
                    v-model="state.limit.value"
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
            <div v-if="state.loading.value">
                <TileSkeleton v-for="idx in state.limit.value === '' ? 10 : Number(state.limit.value)" :key="idx" />
            </div>
            <template v-else>
                <Tile
                    v-for="repository in state.repositories.value"
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
        <TileWrap class="justify-end">
            <UPagination
                v-model="state.page.value"
                size="md"
                :total="100"
                :show-last="false"
                show-first
            />
        </TileWrap>
    </div>
</template>

<script lang="ts" setup>
// TODO Move this state to `/project` route
const state = {
    sortBy: ref(''),
    limit: ref(''),
    timeFrame: ref(''),
    loading: ref(false),
    repositories: ref([]) as Ref<Array<any>>,
    page: ref(1),
    fetchRepos: async function () {
        this.loading.value = true

        const repos = await useApi().getRepositories(
            true,
            unref(this.limit),
            unref(this.timeFrame),
            unref(this.sortBy),
            unref(this.page)
        ) as any

        this.loading.value = false
        this.repositories.value = unref(repos)
    }
}

await state.fetchRepos()

watch([state.sortBy, state.limit, state.timeFrame, state.page], state.fetchRepos.bind(state))
</script>