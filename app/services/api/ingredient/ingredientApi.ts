import { ApiResponse, ApisauceInstance, create } from "apisauce"
import { GeneralApiProblem, getGeneralApiProblem } from "../apiProblem"
import type { ApiIngredientResponse } from "./ingredientApi.types"
import { ApiConfig } from "../api.types"
import { DEFAULT_API_CONFIG } from "../apiConfig"
import { Ingredient } from "types/ingredients.types"

export class IngredientApi {
  apisauce: ApisauceInstance
  config: ApiConfig

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async getIngredients(): Promise<{ kind: "ok"; ingredients: Ingredient[] } | GeneralApiProblem> {
    const response: ApiResponse<ApiIngredientResponse[]> = await this.apisauce.get("/ingredient")

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      const rawData = response.data

      const ingredients: Ingredient[] =
        rawData?.map((raw) => ({
          ...raw,
        })) ?? []

      return { kind: "ok", ingredients }
    } catch (e) {
      if (__DEV__ && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
}

export const ingredientApi = new IngredientApi()
