<script lang="ts" setup>

</script>

<template>
    <main
        font-sans py-4 px-10 text-center
        max-w-400px mx-auto
        relative flex flex-col min-h-full
    >
        <AppNavbar w-full />
        <div grow>
            <slot />
        </div>
        <AppFooter />
    </main>
</template>
