<script lang="ts" setup>
defineProps<{ modelValue?: any[] }>()
const emit = defineEmits(['update:modelValue'])

const lots = ref([
    { lot: 1, price: 0, soldout: false },
])
const lotsWithUpdatedPrice = (lotList: any[]) => lotList.map(lot => ({ ...lot, price: lot.price * 100 }))

const onAddLot = () => lots.value.push(
    { lot: lots.value.length + 1, price: 0, soldout: false },
)
const onRemoveLot = (lot: number) => lots.value = lots.value.filter(el => el.lot !== lot)
const { formatLot } = useFormat()

onMounted(() => emit('update:modelValue', lotsWithUpdatedPrice(lots.value)))

watchEffect(() => {
    if (lots.value.length > 0)
        emit('update:modelValue', lotsWithUpdatedPrice(lots.value))
})
</script>

<template>
    <div text-sm b-1 b-warmgray-200 dark:b-warmgray-700 py-2 px-3>
        <div
            text-3 font-bold
            flex gap-3
            text-warmgray-600 dark:text-warmgray-400 mb-2
        >
            <div w-18>
                Lote
            </div>
            <div w-24>
                Preço
            </div>
            <div>
                Esgotado
            </div>
        </div>
        <div
            v-for="lot in lots" :key="lot.lot"
            flex gap-3 items-center mb-2
        >
            <div w-18>
                {{ formatLot(lot.lot) }}
            </div>
            <div w-24>
                <input v-model="lot.price" type="number" r-input>
            </div>
            <div grow>
                <input v-model="lot.soldout" type="checkbox">
            </div>
            <div v-if="lot.lot > 1" r-button @click="() => onRemoveLot(lot.lot)">
                <div i-carbon-delete />
            </div>
        </div>
        <div v-if="lots.length < 4" r-button flex items-center justify-center mt-3 @click="onAddLot">
            <div i-carbon-add /> Adicionar lote
        </div>
    </div>
</template>
