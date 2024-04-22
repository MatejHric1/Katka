  export interface BasketItem {
    produktId: number
    meno: string
    cena: number
    fotkaUrl: string
    znacka: string
    typ: string
    quantity: number
  }

  export interface Basket {
    id: number
    byuerId: string
    items: BasketItem[]
  }