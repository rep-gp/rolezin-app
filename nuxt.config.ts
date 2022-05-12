import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: [
        'nuxt-ev',
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        // '@nuxtjs/supabase',
    ],
    experimental: {
        reactivityTransform: true,
    },
    vueuse: {
        ssrHandlers: true,
    },
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        icons: {
            scale: 1.2,
        },
        shortcuts: {
            bordered: 'b-1 b-coolgray-200 dark:b-dark-200',
        },
        webFonts: {
            provider: 'google',
            fonts: {
                sans: 'Inter:400,700',
            },
        },
    },
    colorMode: {
        classSuffix: '',
    },
})
