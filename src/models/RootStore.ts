import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthenticationStoreModel } from "./AuthenticationStore"
import { Cart } from "./Cart"
import { Menu } from "./Menu"
import { Ingredients } from "./Ingredients"
import { AppStore } from "./App"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  cartStore: types.optional(Cart, { entries: [], totalPrice: 0 }),
  menuStore: types.optional(Menu, { entries: [], selectedCategory: "All" }),
  ingredientsStore: types.optional(Ingredients, { entries: [], error: null, isLoading: true }),
  appStore: types.optional(AppStore, {
    state: { openedCart: false, viewingDish: null },
  }),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
