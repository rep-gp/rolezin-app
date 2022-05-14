import { acceptHMRUpdate, defineStore } from 'pinia'
import { faker } from '@faker-js/faker'

export interface Party {
    id: string
    name: string
    description: string
    date: Date
    image: string
    link: string
}

export const usePartyStore = defineStore('parties', () => {
    const parties = useState<Party[]>('party-list', () => [])

    const addParty = (date: string) => {
        const party: Party = {
            id: faker.datatype.uuid(),
            name: faker.company.companyName(),
            description: faker.lorem.sentence(),
            date: new Date(date),
            image: faker.image.imageUrl(),
            link: faker.internet.url(),
        }
        parties.value.push(party)
    }

    const removeParty = (id: string) => {
        parties.value = parties.value.filter(party => party.id !== id)
    }

    const getParty = (id: string) => {
        return parties.value.find(party => party.id === id)
    }

    return {
        parties,
        addParty,
        removeParty,
        getParty,
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(usePartyStore, import.meta.hot))
