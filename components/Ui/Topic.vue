<template>
    <UButton
        color="gray"
        variant="solid"
        :size="props.size ?? 'sm'"
        class="whitespace-nowrap rounded-full text-green-400"
        :to="`/projects?topics=${topic[0]}`"
    >
        <slot v-if="slots._" />
        <template v-else>
            {{props.topic}}
        </template>
    </UButton>
</template>

<script lang="ts" setup>
const props = defineProps<{
    topic: string,
    size?: 'xs' | 'sm'
}>()
const slots = useSlots()
</script>