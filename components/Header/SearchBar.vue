<template>
    <UInputMenu
        v-model="selected"
        :loading="loading"
        :search="search"
        color="gray"
        variant="outline"
        placeholder="Search..."
        trailing
        trailing-icon="i-heroicons-magnifying-glass-20-solid"
        option-attribute="repository"
        :padded="true"
        :debounce="300"
        :ui-menu="uiMenu"
    >
        <template #option="{ option: repository }">
            <UAvatar v-if="repository.avatar_url" :src="repository.avatar_url" />
            <span>{{repository.repository}}</span>
        </template>
        <template #empty>
            <span>No repositories</span>
        </template>
    </UInputMenu>
</template>

<script lang="ts">
export default {
    setup() {
        const loading = ref(false)
        const selected = ref('')
        const { searchRepositories } = useApi()

        const search = async function (query: string): Promise<any[]> {
            loading.value = true
            const result = await searchRepositories(query)
            loading.value = false
            return result.value.length ? unref(result) : []
        }

        return {
            loading,
            selected,
            search
        }
    },
    computed: {
        uiMenu() {
            return {
                option: {
                    base: 'cursor-pointer'
                }
            }
        }
    },
    watch: {
        selected(val) {
            if(val && val.owner && val.repository) {
                navigateTo(`/projects/${val.owner}/${val.repository}`)
            }
        }
    }
}
</script>