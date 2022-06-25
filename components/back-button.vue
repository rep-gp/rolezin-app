<script lang="ts" setup>
const router = useRouter()
const goBack = () => {
    router.back()
}
</script>

<template>
    <div
        flex items-center
        cursor-pointer
        text-warmgray-500 dark:text-warmgray-300
        text-sm outline-none
        transition
        class="group"
        @click="goBack"
    >
        <div i-carbon-arrow-left mr-1 group-hover:translate-x--1 transition select-none />
        Voltar
    </div>
</template>
