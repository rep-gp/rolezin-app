<script lang="ts" setup>
import { isClient } from '@vueuse/shared'

const emit = defineEmits(['change'])

const image = ref<File | null>(null)
const imageBlob = ref<string | null>(null)
const imageDropzone = ref<HTMLElement | null>()

const onImageChange = async(event: InputEvent) => {
    const file = (event.target as HTMLInputElement).files[0]
    image.value = file
    emit('change', image.value)
}

watchEffect(() => {
    if (image.value) {
        const fileToBase64 = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = reject
        })
        fileToBase64(image.value).then((blob) => {
            imageBlob.value = blob
        })
    }
})

const imagePreviewStyle = computed(() => {
    if (imageBlob.value) {
        return {
            backgroundImage: `url(${imageBlob.value})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        }
    }
    else { return {} }
})

const onDrop = (files: File[] | null) => {
    if (files && files[0]) {
        image.value = files[0]
        emit('change', image.value)
    }
}

onMounted(() => {
    if (isClient) {
        useEventListener('paste' as any, (event: ClipboardEvent) => {
            const file = event.clipboardData.items[0]
            if (file.type.includes('image')) {
                image.value = file.getAsFile()
                emit('change', image.value)
            }
        })
    }
})

const { isOverDropZone } = useDropZone(imageDropzone, onDrop)

</script>

<template>
    <div>
        <label
            ref="imageDropzone"
            for="image"
            :style="imagePreviewStyle"
            block cursor-pointer w-full
            h-24 dark:bg-warmgray-700 bg-warmgray-100
            rounded text-center pt-3
            select-none
            mt-5
        >
            <div v-if="!image">
                <div i-carbon-image w-full text-9 text-warmgray-500 />
                <div w-full text-warmgray-400 dark:text-warmgray-400 text-sm>
                    {{ isOverDropZone ? 'Fazer upload' : 'Enviar Imagem' }}
                </div>
            </div>
        </label>
        <input
            id="image"
            type="file"
            display-none @change="onImageChange"
        >
    </div>
</template>
