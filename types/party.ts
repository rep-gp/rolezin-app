export interface Party {
    id: string
    name: string
    description: string
    date: Date
    image: string
    link: string
    instagram: string
    price: Array<{
        price: number
        lot: number
        soldout: boolean
    }>
}

export interface PartyCreate extends Omit<Party, 'id'> {
    price: { price: number; lot: number; soldout: boolean }[]
}
