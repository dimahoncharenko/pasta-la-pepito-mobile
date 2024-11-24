import { Ingredient } from "src/entities/ingredient/models/ingredients.types"

export const initIngredients = (ingredients: Ingredient[]) => {
  return ingredients.reduce<{
    [P in string]: {
      id: number
      quantity: number
      price: number
      name: string
      image: string | null
    }
  }>((acc, curr) => {
    acc[curr.name] = {
      id: curr.id,
      quantity: 0,
      price: curr.price,
      image: curr.image,
      name: curr.name,
    }

    return acc
  }, {})
}
