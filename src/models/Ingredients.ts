import { flow, types } from "mobx-state-tree"
import { ingredientApi } from "src/services/api/ingredient/ingredientApi"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const IngredientEntry = types.model("Ingredient", {
  id: types.number,
  name: types.string,
  price: types.number,
  image: types.maybeNull(types.string),
})

export const Ingredients = types
  .model("Ingredient", {
    isLoading: true,
    error: types.maybeNull(types.string),
    entries: types.array(IngredientEntry),
  })
  .actions((self) => {
    function markLoading(loading: boolean) {
      self.isLoading = loading
    }

    const loadIngredients = flow(function* fetcher() {
      markLoading(true)

      try {
        const response = yield ingredientApi.getIngredients()
        if (response.kind !== "ok") {
          throw new Error(response.kind)
        }

        self.entries = response.ingredients
        markLoading(false)
      } catch (err) {
        if (err instanceof Error) {
          self.error = err.message
          console.error("Failed to load ingredients ", err)
        }
        markLoading(false)
      }
    })

    return {
      ...withSetPropAction,
      loadIngredients,
    }
  })
  .views((store) => ({
    get getEntries() {
      return store.entries
    },
  }))
