import { ApiResponse, ApisauceInstance, create } from "apisauce"
import { Feature } from "src/entities/feature/models/feature.types"
import { ApiConfig } from "../api.types"
import { DEFAULT_API_CONFIG } from "../apiConfig"
import { getGeneralApiProblem } from "../apiProblem"
import { ApiFeatureResponse } from "./featureApi.types"

class FeatureApi {
  config: ApiConfig
  apisauce: ApisauceInstance

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
    })
  }

  async getFeatures() {
    const response: ApiResponse<ApiFeatureResponse> = await this.apisauce.get(
      this.config.url + "/our-advantages",
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      const rawData = response.data

      const features: Feature[] =
        rawData?.map((raw) => ({
          ...raw,
        })) ?? []

      return { kind: "ok", features }
    } catch (e) {
      if (__DEV__ && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
}

export const featureApi = new FeatureApi()
