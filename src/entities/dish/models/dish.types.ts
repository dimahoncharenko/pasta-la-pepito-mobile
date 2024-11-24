export type Dish = {
  id: number
  category: {
    id: number
    name: string
  }
  title: string
  slug: string
  weight: number | null
  volume: number | null
  composition: string | null
  price: number
  image: string | null
  isNew: boolean
  customizable: boolean
  orderCount: number
}
