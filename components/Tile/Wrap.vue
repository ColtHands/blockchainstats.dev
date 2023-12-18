<template>
    <div
        :class="[
            'first:rounded-t-md',
            'last:rounded-b-md',
            'border-b',
            'last:border-0',
            'border-green-900',
            'bg-slate-800',
            'flex',
            'gap-10',
            'items-center',
            'p-5'
        ]"
    >
        <slot />
    </div>
</template>