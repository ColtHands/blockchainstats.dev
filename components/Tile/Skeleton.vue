<template>
    <TileWrap class="h-28">
        <div class="flex items-center space-x-4 w-full">
            <USkeleton class="h-14 w-14" :ui="circle" />
            <div class="space-y-2">
                <USkeleton class="h-4 w-40" :ui="bg" />
                <USkeleton class="h-4 w-80" :ui="bg" />
            </div>
            <div class="text-right text-sm flex flex-col gap-1.5" style="margin-left: auto">
                <USkeleton class="h-3 w-3" :ui="circle" />
                <USkeleton class="h-3 w-3" :ui="circle" />
                <USkeleton class="h-3 w-3" :ui="circle" />
            </div>
        </div>
    </TileWrap>
</template>

<script lang="ts" setup>
const bg = { background: 'dark:bg-slate-500' }
const circle = { rounded: 'rounded-full', ...bg }
</script>