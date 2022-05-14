<script lang="ts" setup>
import type { Party } from '~/store/parties'

const props = defineProps<{
    party: Party
}>()

const container = ref(null)

const cardStyle = computed(() => ({
    backgroundImage: `url('${props.party.image}')`,
}))
</script>

<template>
    <nuxt-link
        ref="container" dark:bg-dark-300 py-2 px-4 mt-3
        rounded-2
        text-white h-50 bg-center
        bg-cover flex
        :style="cardStyle"
        :to="'/party/' + props.party.id"
    >
        <div bg="dark-200/90" py-2 px-4 rounded-2 mt-auto>
            <div font-bold text-3>
                {{ party.name }}
            </div>
            <div text="2.5">
                {{ party.description }}
            </div>
        </div>
    </nuxt-link>
</template>
