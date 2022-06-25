import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'
import type { Party, PartyCreate } from '~~/types/party'

export const usePartyStore = defineStore('parties', () => {
    const { baseURL } = useRuntimeConfig().public
    const parties = useState<Party[]>('party-list', () => [])

    const addParty = async(party: PartyCreate, image?: File) => {
        const response = await $fetch('/party', {
            method: 'POST',
            body: { ...party, image: '' },
            baseURL,
        }) as any
        if (image) {
            const data = new FormData()
            data.append('image', image)
            await axios.patch(`/party/${response.id}/image`, data, {
                baseURL,
            })
        }
        return response
    }

    const removeParty = (id: string) => {
        parties.value = parties.value.filter(party => party.id !== id)
    }

    const getParty = async(id: string) => {
        const { data: party, pending } = useFetch<Party>(`/party/${id}`, { baseURL })
        return { party, pending }
    }

    const listParties = () => useFetch<Party[]>('/party', { baseURL, params: { since: new Date().toISOString() } })

    return {
        parties,
        addParty,
        removeParty,
        getParty,
        listParties,
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(usePartyStore, import.meta.hot))
