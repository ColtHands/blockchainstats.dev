<template>
    <div class="w-full h-full flex justify-center items-center flex-col">
        <pre class="text-xs w-1/2">{{JSON.stringify(error, null, 2)}}</pre>
        <button class="hover:underline" @click="handleError">
            Go to /
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    error: {
        url: string
        statusCode: number
        statusMessage: string
        message: string
        description: string
        data: any
    }
}>()

const handleError = () => clearError({ redirect: '/' })
</script>