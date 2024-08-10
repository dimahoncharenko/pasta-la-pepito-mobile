import { Dish } from "app/data/dish.data"
import { types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

const Ingredient = types.model("Ingredient", {
  name: types.string,
  mass: types.number,
  price: types.number,
})

export const DishEntry = types.model("Dish", {
  name: types.string,
  description: types.string,
  mass: types.number,
  price: types.number,
  ingredients: types.array(Ingredient),
  imageSrc: types.string,
  category: types.enumeration(["Pasta", "Risotto", "Soup", "Drink", "Other"] as Dish["category"][]),
})

export const Menu = types
  .model("Menu", {
    entries: types.array(DishEntry),
    selectedCategory: types.enumeration(["All", "Pasta", "Risotto", "Soup", "Drink", "Other"]),
  })
  .actions((store) => ({
    ...withSetPropAction(store),
    changeCategory(newCategory: "All" | "Pasta" | "Risotto" | "Soup" | "Drink" | "Other") {
      this.setProp("selectedCategory", newCategory)
    },
  }))
  .views((store) => ({
    get getAllEntries() {
      return store.entries
    },
    get getCurrentCategory() {
      return store.selectedCategory
    },
    get getFilteredEntries() {
      if (store.selectedCategory === "All") return store.entries
      return store.entries.filter((entry) => entry.category === store.selectedCategory)
    },
  }))
