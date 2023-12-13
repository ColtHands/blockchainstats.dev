<template>
    <NuxtLink v-bind="$props" :class="cn">
        <slot />
    </NuxtLink>
</template>

<script lang="ts" setup>
type Props = {
    alwaysOn?: boolean
}
const props = defineProps<Props>()

const cn = computed(() => props.alwaysOn ? 'text-green-400' : ['hover:text-green-400', 'transition-colors'])
</script>