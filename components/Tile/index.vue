<template>
    <TileProject
        v-if="variant === 'project'"
        :avatar-url="avatarUrl"
        :name="name"
        :owner="owner"
        :url="url"
        :description="description"
        :stars="stars"
        :forks="forks"
        :open-issues="openIssues"
    />
    <TileExtended v-if="variant === 'extended'" />
    <TileSmall v-if="variant === 'small'" />
</template>

<script lang="ts" setup>
type ProjectProps = {
    variant: 'project',
    avatarUrl: string
    name: string
    owner: string
    url: string
    description: string
    stars: number
    forks: number
    openIssues: number
}

type SmallProps = {
    variant: 'small',
    repository: any
}
type ExtendedProps = {
    variant: 'extended',
    repository: any
}

type Props = ProjectProps | SmallProps | ExtendedProps

defineProps<Props>()
</script>