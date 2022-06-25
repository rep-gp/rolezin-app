import { defineNuxtConfig } from 'nuxt'
import load from '@henrycunh/ev'
import { shortcuts } from './style/shortcuts'

for (const [key, value] of Object.entries(load()))
    process.env[key] = value

export default defineNuxtConfig({
    modules: [
        'nuxt-ev',
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        '@kevinmarrec/nuxt-pwa',
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
        shortcuts,
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
    runtimeConfig: {
        public: {
            baseURL: process.env.API_URL,
        },
    },
    pwa: {
        icon: {
            source: './public/icon.png',
        },
        manifest: {
            background_color: '#ffffff',
            description: 'na busca de um rolê? chega ae',
            name: 'rolezin',
            short_name: 'rolezin',
            theme_color: '#f97316',
        },
        meta: {
            description: 'na busca de um rolê? chega ae',
            lang: 'pt-BR',
            name: 'rolezin',
            ogDescription: 'na busca de um rolê? chega ae',
            ogUrl: 'https://rolez.in',
        },
    },
})
