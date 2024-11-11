/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://docs.infinite.red/ignite-cli/boilerplate/app/services/#backend-api-integration)
 * documentation for more details.
 */
import { ApiResponse, ApisauceInstance, create } from "apisauce"
import { Dish } from "src/entities/dish/models/dish.types"
import { ApiConfig } from "../../../services/api/api.types"
import { DEFAULT_API_CONFIG } from "../../../services/api/apiConfig"
import { GeneralApiProblem, getGeneralApiProblem } from "../../../services/api/apiProblem"

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class DishApi {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
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

  async getDishes(): Promise<{ kind: "ok"; dishes: Dish[] } | GeneralApiProblem> {
    const response: ApiResponse<Dish[]> = await this.apisauce.get("/dish")

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      const rawData = response.data

      const dishes: Dish[] =
        rawData?.map((raw) => ({
          ...raw,
        })) ?? []

      return { kind: "ok", dishes }
    } catch (e) {
      if (__DEV__ && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }

  async getNewDishes(): Promise<{ kind: "ok"; hits: Dish[] } | GeneralApiProblem> {
    const response: ApiResponse<{ hits: Dish[] }> = await this.apisauce.get("/dish/hits-and-news")

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      const hits = response.data?.hits || []

      // console.log(rawData)

      // const hits: Dish[] =
      //   rawData?.map((raw) => ({
      //     ...raw,
      //   })) ?? []

      return { kind: "ok", hits }
    } catch (e) {
      if (__DEV__ && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
}

// Singleton instance of the API for convenience
export const dishApi = new DishApi()
