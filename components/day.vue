<script lang="ts" setup>
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import type { Party } from '~/store/parties'

const props = defineProps<{
    date: string
    parties: Party[]
}>()

const formatedDay = computed(() =>
    dayjs(props.date).locale('pt-br').format('dddd'),
)
const formatedDate = computed(() =>
    dayjs(props.date).locale('pt-br').format('D [de] MMMM [de] YYYY'),
)

</script>

<template>
    <div w-full b-1 bordered px-5 py-3 rounded-2 text-left>
        <div flex items-center>
            <div text-coolgray-600 dark:text-coolgray-200 font-600>
                {{ formatedDay }}
            </div>
            <div ml-auto text-sm text-coolgray-500>
                {{ formatedDate }}
            </div>
        </div>
        <div>
            <DayParty
                v-for="party in parties"
                :key="party.id"
                :party="party"
            />
        </div>
    </div>
</template>
