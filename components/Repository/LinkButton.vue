<template>
    <UButton
        v-if="props.url"
        block
        variant="soft"
        color="emerald"
        class="flex justify-start gap-2"
        :label="getUrlDomainName(props.url)"
        :to="props.url"
        target="_blank"
    >
        <template #leading>
            <slot name="icon" />
        </template>
    </UButton>
</template>

<script lang="ts" setup>
type Props = {
    url: Nullish<string>
}
const props = defineProps<Props>()
</script>