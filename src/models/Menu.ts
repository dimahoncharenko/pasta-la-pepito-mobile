import { types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const DishEntry = types.model("Dish", {
  id: types.number,
  title: types.string,
  slug: types.string,
  weight: types.maybeNull(types.number),
  volume: types.maybeNull(types.number),
  composition: types.maybeNull(types.string),
  price: types.number,
  image: types.maybeNull(types.string),
  type: types.string,
  isNew: types.boolean,
  customizable: types.boolean,
  orderCount: types.number,
})

export const Menu = types
  .model("Menu", {
    entries: types.array(DishEntry),
    selectedCategory: types.string,
    filtered: types.array(DishEntry),
    viewingDish: types.maybeNull(types.number),
  })
  .actions((store) => ({
    ...withSetPropAction(store),
    changeCategory(newCategory: string) {
      this.setProp("selectedCategory", newCategory)
    },
    setViewingDish(value: number | null) {
      store.viewingDish = value
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
      return store.entries.filter((entry) => entry.type === store.selectedCategory)
    },
    get isViewing() {
      return !!store.viewingDish
    },
  }))
