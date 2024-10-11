export type Dish = {
  id: number
  title: string
  slug: string
  weight: number | null
  volume: number | null
  composition: string | null
  price: number
  image: string
  type: string
  isNew: boolean
  customizable: boolean
  orderCount: number
}
