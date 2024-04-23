export interface Produkt {
    id: number
    meno: string
    popis: string
    cena: number
    fotkaUrl: string
    typ?: string
    znacka: string
    quantityInStock?: number
}