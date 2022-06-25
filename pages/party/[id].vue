<script lang="ts" setup>
const { getParty } = usePartyStore()
const route = useRoute()
const { pending, party } = await getParty(String(route.params.id))
const { formatCurrency, formatLot } = useFormat()
</script>

<template>
    <div>
        <div v-if="pending" text-coolgray-400 flex flex-col items-center font-bold>
            <div i-carbon-repeat text-8 mb-2 text-coolgray-200 />
            Carregando...
        </div>
        <div v-else>
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
                <div text-coolgray-500 dark:text-coolgray-300 whitespace-pre-wrap>
                    {{ party.description }}
                </div>
            </div>
            <div bordered mt-2 p-4 flex>
                <nuxt-link
                    text-coolgray-500 dark:text-coolgray-300
                    hover:text-orange-600
                    transition font-bold text-14px flex items-center
                    cursor-pointer
                    :to="party.link"
                >
                    <div i-carbon-ticket mr-1 />
                    Comprar rolê
                </nuxt-link>
                <nuxt-link :to="party.instagram" text-purple text-xl ml-auto cursor-pointer>
                    <div i-carbon-logo-instagram />
                </nuxt-link>
            </div>
            <div v-if="party.price" bordered mt-2 p-4>
                <div
                    v-for="price in party.price" :key="price.lot"
                    flex text-3 mb-2 b-b-1 b-coolgray-500 pb-2
                    text-coolgray-500 dark:text-coolgray-300
                    last-of-type="mb-0 b-b-0"
                    :class="[{'op30':price.soldout}]"
                >
                    <div>
                        {{ formatLot(price.lot) }} lote
                    </div>
                    <div ml-auto>
                        {{ formatCurrency(price.price) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
