import { types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const AppEntity = types.model({
  openedCart: types.boolean,
})

export const AppStore = types
  .model("AppStore", {
    state: AppEntity,
  })
  .actions((state) => ({
    ...withSetPropAction,
    openCart() {
      state.state.openedCart = true
    },
    closeCart() {
      state.state.openedCart = false
    },
    toggleCart() {
      state.state.openedCart = !state.state.openedCart
    },
  }))
  .views((state) => ({
    get isCartOpened() {
      return state.state.openedCart
    },
  }))
