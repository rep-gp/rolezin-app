<script lang="ts" setup>
import { usePartyStore } from '~/store/parties'

const { parties: partyList, addParty } = usePartyStore()
const days = computed(() => new Array(15)
    .fill(0)
    .map((_, i) =>
        new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000),
    ))

onMounted(() => {
    if (partyList.length === 0)
        days.value.forEach(day => addParty(day.toISOString()))
})

const getParties = (day: Date) => {
    return partyList.filter((party) => {
        const partyDate = new Date(party.date)
        return partyDate.getFullYear() === day.getFullYear()
            && partyDate.getMonth() === day.getMonth()
            && partyDate.getDate() === day.getDate()
    })
}

const parties = computed(() => partyList)

</script>

<template>
    <div pb-24>
        <Day
            v-for="day in days" :key="day.getDate()" :date="day"
            :parties="getParties(day)"
            mb-4
        />
        {{ partyList.length }}
    </div>
</template>
