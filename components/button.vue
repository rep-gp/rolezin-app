<script lang="ts" setup>
const emit = defineEmits(['click'])
const onClick = () => emit('click')
</script>

<template>
    <button
        text="3.5 warmgray-800"
        dark:text-warmgray-200
        font-bold
        class="dark:bg-warmgray-800 dark:hover:bg-warmgray-700"
        bg-warmgray-100
        rounded p="x-6 y-2.5" rounded-2
        b-1 b-warmgray-200 dark:b-warmgray-700
        shadow-md shadow-warmgray-100 dark:shadow-warmgray-900 active:none
        transition
        flex justify-center
        items-center
        @click="onClick"
    >
        <slot />
    </button>
</template>
