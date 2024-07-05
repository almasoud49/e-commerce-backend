export type TVariant = {
  type: string
  value: string
}

export type TInventory = {
  quantity: number
  inStock: boolean
}

export type TProduct = {
  name?: string
  description?: string
  price: number
  category?: string
  tags?: string[]
  variants?: TVariant[]
  inventory: TInventory
}

export type TSearch = {
  searchTerm: string
  name: string
  description: string
  category: string
  tags: string[]
}
