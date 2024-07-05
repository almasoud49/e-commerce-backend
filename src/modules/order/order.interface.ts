export type TEmail = string | undefined

export type TOrder = {
  email: TEmail
  productId: string
  price: number
  quantity: number
}
