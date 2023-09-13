<template>
    <main>
        <slot />
        projects layout
        timeframe - {{timeFrame}}
        projects layout
    </main>
</template>

<script lang="ts" setup>
defineProps({
    timeFrame: {
        type: String,
        default: 'days'
    }
})
</script>