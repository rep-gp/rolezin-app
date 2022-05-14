<script lang="ts" setup>
const links = ref([
    { href: '/', text: 'Sobre' },
])
</script>

<template>
    <div flex text-xl items-center op70 p-4 max-w-800px mx-auto>
        <nuxt-link
            to="/" text-2xl text-navy dark:text-white font-bold
            border-b-2 border-transparent hover:border-orange
            transition-all
        >
            rolêzin 🍻
        </nuxt-link>
        <div ml-auto flex items-center>
            <nuxt-link
                v-for="link in links" :key="link.text"
                :to="link.href"
                border-b-2 border-transparent hover:border-orange
                transition-all text-4
            >
                {{ link.text }}
            </nuxt-link>
            <DarkToggle ml-4 />
        </div>
    </div>
</template>
