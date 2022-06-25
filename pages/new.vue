<script lang="ts" setup>
const { addParty } = usePartyStore()

const party = reactive({
    name: '',
    description: '',
    instagram: '',
    date: '',
    link: '',
    price: [],
    image: null,
})

const descriptionHeightStyle = computed(() => ({
    height: `${Math.min(Math.max(party.description.split('\n').length, 3), 20) * 1.5}em`,
}))

const onImageChange = async(file: File) => {
    party.image = file
}

const onSubmit = async() => {
    await addParty({ ...party, date: new Date(party.date) }, party.image)
    navigateTo('/')
}

</script>

<template>
    <div p-3 text-left pb-12>
        <BackButton />
        <h1
            font-bold text-lg my-4 text-warmgray-600 dark:text-warmgray-300
        >
            Recomendar um rolê
        </h1>
        <div>
            <div r-label>
                Nome
            </div>
            <input
                v-model="party.name"
                type="text"
                r-input
                mb-3
            >
        </div>
        <div mt-2>
            <div r-label>
                Descrição
            </div>
            <textarea
                v-model="party.description"
                :style="descriptionHeightStyle"
                placeholder="Descrição"
                r-input h-auto
                mb-3
            />
        </div>
        <div>
            <div r-label>
                Data
            </div>
            <input
                v-model="party.date"
                type="date"
                r-input
            >
        </div>
        <div mb-3>
            <image-input @change="onImageChange" />
        </div>
        <div>
            <div r-label>
                Link de venda
            </div>
            <input
                v-model="party.link"
                type="text"
                r-input
                mb-3
            >
        </div>
        <div>
            <div r-label>
                Instagram dos organizadores
            </div>
            <input
                v-model="party.instagram"
                type="text"
                r-input
                mb-3
            >
        </div>
        <div>
            <div r-label>
                Preço
            </div>
            <PriceForm v-model="party.price" />
        </div>
        <div mt-4>
            <Button w-full @click="onSubmit">
                <div i-carbon-save mr-2 />
                Salvar
            </Button>
        </div>
    </div>
</template>
