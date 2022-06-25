<script lang="ts" setup>
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const props = defineProps<{ modelValue?: string }>()
const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
    extensions: [
        StarterKit,
    ],
    editorProps: {
        attributes: {
            class: 'outline-none text-3.5 text-warmgray-500 dark:text-warmgray-300 min-h-12',
        },
    },
    onUpdate: () => {
        emit('update:modelValue', editor.value.getHTML())
    },
})

watchEffect(() => {
    if (!editor.value)
        return
    const isSame = editor.value.getHTML() === props.modelValue
    if (isSame)
        return
    editor.value.commands.setContent(props.modelValue, false)
})
</script>

<template>
    <div>
        <div flex gap-1 my-1>
            <div r-button @click="editor.chain().focus().toggleBold().run()">
                <div i-carbon-text-bold />
            </div>
            <div r-button @click="editor.chain().focus().toggleItalic().run()">
                <div i-carbon-text-italic />
            </div>
        </div>
        <editor-content :editor="editor" w-full r-input />
    </div>
</template>
