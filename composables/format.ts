export const useFormat = () => {
    return {
        formatCurrency: (value: number) => {
            return Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(value / 100)
        },
        // format lot to extensive number format in pt-br
        formatLot: (value: number) => ({
            1: 'Primeiro',
            2: 'Segundo',
            3: 'Terceiro',
            4: 'Quarto',
        })[value],
    }
}
