<script lang="ts" setup>
import type { Party } from '~/store/parties'
import { usePartyStore } from '~/store/parties'

const { getParty } = usePartyStore()
const route = useRoute()
const party = ref<Party | null>(null)

onMounted(() => {
    party.value = getParty(String(route.params.id))
})
</script>

<template>
    <div>
        <div v-if="party">
            <div p-2 b-1 bordered rounded-2>
                <img
                    :src="party.image"
                    :alt="party.name"
                >
            </div>
            <div bordered mt-2 p-4 rounded-2 text-left>
                <div font-bold text-coolgray-600 dark:text-coolgray-300>
                    {{ party.name }}
                </div>
                <div text-coolgray-500 dark:text-coolgray-300>
                    {{ party.description }}
                </div>
            </div>
            <div bordered mt-2 p-4 rounded-2 flex>
                <nuxt-link
                    text-coolgray-500 dark:text-coolgray-300
                    b-b-2 b-transparent hover:b-orange-600
                    pb-1
                    transition font-bold text-14px flex items-center
                    cursor-pointer
                    :to="party.link"
                >
                    <div i-carbon-ticket mr-1 />
                    Comprar rolê
                </nuxt-link>
                <nuxt-link text-purple text-xl ml-auto cursor-pointer>
                    <div i-carbon-logo-instagram />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
