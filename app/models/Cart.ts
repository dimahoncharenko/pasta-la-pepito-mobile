import { types } from "mobx-state-tree"

import { withSetPropAction } from "./helpers/withSetPropAction"
import { Dish } from "types/dish.types"
import { DishEntry } from "./Menu"
import { Ingredient } from "types/ingredients.types"

export type CartEntry = {
  quantity: number
  selectedIngredients: (Ingredient & { quantity: number })[]
} & Dish

const CustomIngredientModel = types.model("CustomIngredient", {
  id: types.number,
  name: types.string,
  price: types.number,
  image: types.maybeNull(types.number),
  quantity: types.number,
})

export const CartEntryModel = types.compose(
  types.model("CartEntry", {
    quantity: types.number,
    selectedIngredients: types.array(CustomIngredientModel),
  }),
  DishEntry,
)

export const Cart = types
  .model("Cart", {
    entries: types.array(CartEntryModel),
    totalPrice: types.number,
  })
  .actions((store) => ({
    ...withSetPropAction(store),
    decreaseQuantity(name: string) {
      store.entries.forEach((ent, index) => {
        if (ent.title === name && ent.quantity > 0) {
          ent.quantity--
          store.totalPrice -= ent.price * ent.quantity

          if (ent.quantity <= 0) {
            store.totalPrice -= ent.price
            store.entries.splice(index, 1)
          }
        }
      })
    },
    increaseQuantity(name: string) {
      store.entries.forEach((ent) => {
        if (ent.title === name) {
          ent.quantity++
          store.totalPrice += ent.price * ent.quantity
        }
      })
    },
    addEntry(entry: CartEntry) {
      const duplicate = store.entries.find((ent) => ent.title === entry.title)

      if (
        duplicate &&
        duplicate.selectedIngredients &&
        entry.selectedIngredients &&
        duplicate.selectedIngredients.toString() !== entry.selectedIngredients.toString()
      ) {
        console.log(entry)

        this.removeEntry(entry.title)
        store.entries.push(entry)
      } else if (!duplicate) {
        store.entries.push(entry)
      }
    },
    removeEntry(name: string) {
      const candidate = store.entries.findIndex((ent) => ent.title === name)
      if (candidate === -1) return
      const entry = store.entries[candidate]

      store.totalPrice -= entry.price * entry.quantity
      store.entries.splice(candidate, 1)
    },
  }))
  .views((store) => ({
    get getEntriesCount() {
      return store.entries.length
    },
    get getTotalPrice() {
      return store.entries.reduce((acc, prev) => acc + prev.quantity * prev.price, 0)
    },
    get getAllEntries() {
      return store.entries
    },
  }))
