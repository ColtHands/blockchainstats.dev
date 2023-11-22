<template>
    <div class="bg-cyan-950 rounded flex gap-10 items-center w-full p-5">
        <div>
            <img :src="repository.avatar_url" class="h-20 w-20" />
        </div>
        <div>
            <div class="flex">
                <div>title</div>
                <div>github url</div>
            </div>
            <div>description</div>
        </div>
        <div class="ml-auto">
            <div>stars {{repository.growth.month.stars}}</div>
            <div>forks {{repository.growth.month.forks}}</div>
            <div>issues {{repository.growth.month.open_issues}}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
type Props = {
    repository: any
};
defineProps<Props>()
</script>