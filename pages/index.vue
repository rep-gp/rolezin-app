<script lang="ts" setup>
import dayjs from 'dayjs'
import type { Party } from '~~/types/party'

const { listParties } = usePartyStore()
const { data: parties } = await listParties()

const days = computed(() => {
    if (!parties.value)
        return []

    // Group parties by day
    const days = parties.value.reduce((acc, party) => {
        const day = party.date.split('T')[0]
        if (!acc[day])
            acc[day] = []

        acc[day].push(party)
        return acc
    }, {} as Record<string, Party[]>)
    return Object.entries(days).sort((a, b) => {
        const aDate = dayjs(a[0])
        const bDate = dayjs(b[0])
        return aDate.isAfter(bDate) ? 1 : -1
    })
})
</script>

<template>
    <div pb-24>
        <div>
            <Day
                v-for="[day, partyList] in days" :key="day"
                :date="day"
                :parties="partyList"
                mb-4
            />
        </div>
    </div>
</template>
