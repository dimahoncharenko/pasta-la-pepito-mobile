import { Ingredient } from "src/entities/ingredient/models/ingredients.types"

export const initIngredients = (ingredients: Ingredient[]) => {
  return ingredients.reduce<{
    [P in string]: {
      count: number
      price: number
    }
  }>((acc, curr) => {
    acc[curr.name] = {
      count: 0,
      price: curr.price,
    }

    return acc
  }, {})
}
