<template>
    <pre>{{route.fullPath}}</pre>
    <pre>{{route.matched}}</pre>
    <pre>{{route.meta}}</pre>
    <pre>{{route.name}}</pre>
    <pre>{{route.params}}</pre>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>