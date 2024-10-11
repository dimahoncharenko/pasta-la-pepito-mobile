export interface ApiDishResponse {
  id: number
  title: string
  slug: string
  weight: number | null
  volume: number | null
  composition: string | null
  price: number
  image: string | null
  type: string
  customizable: boolean
  orderCount: number
  isNew: boolean
}
