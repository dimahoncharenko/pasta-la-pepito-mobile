import { types } from "mobx-state-tree"

import { withSetPropAction } from "./helpers/withSetPropAction"
import { Dish } from "app/data/dish.data"

export type CartEntry = {
  quantity: number
  selectedIngredients: {
    name: string
    mass: number
    price: number
    quantity: number
    imageSrc: any
  }[]
} & Omit<Dish, "ingredients">

const CustomIngredientModel = types.model("CustomIngredient", {
  imageSrc: types.number,
  mass: types.number,
  name: types.string,
  price: types.number,
  quantity: types.number,
})

export const CartEntryModel = types.model("CartEntry", {
  name: types.string,
  description: types.string,
  mass: types.number,
  price: types.number,
  selectedIngredients: types.array(CustomIngredientModel),
  imageSrc: types.string,
  category: types.enumeration(["Pasta", "Risotto", "Soup", "Drink", "Other"] as Dish["category"][]),
  quantity: types.number,
})

export const Cart = types
  .model("Cart", {
    entries: types.array(CartEntryModel),
    totalPrice: types.number,
  })
  .actions((store) => ({
    ...withSetPropAction(store),
    decreaseQuantity(name: string) {
      store.entries.forEach((ent, index) => {
        if (ent.name === name && ent.quantity > 0) {
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
        if (ent.name === name) {
          ent.quantity++
          store.totalPrice += ent.price * ent.quantity
        }
      })
    },
    addEntry(entry: CartEntry) {
      const duplicate = store.entries.find((ent) => ent.name === entry.name)

      if (
        duplicate &&
        duplicate.selectedIngredients &&
        entry.selectedIngredients &&
        duplicate.selectedIngredients.toString() !== entry.selectedIngredients.toString()
      ) {
        this.removeEntry(entry.name)
        store.entries.push(entry)
      } else if (!duplicate) {
        store.entries.push(entry)
      }
    },
    removeEntry(name: string) {
      const candidate = store.entries.findIndex((ent) => ent.name === name)
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
