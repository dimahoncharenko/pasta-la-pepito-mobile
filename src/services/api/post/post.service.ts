import { ApiResponse, ApisauceInstance, create } from "apisauce"
import { ApiConfig } from "../api.types"
import { DEFAULT_API_CONFIG } from "../apiConfig"
import { GeneralApiProblem, getGeneralApiProblem } from "../apiProblem"
import type { ApiPostResponse, Post } from "./post.types"

export class PostApi {
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

  async getPosts(): Promise<{ kind: "ok"; posts: Post[] } | GeneralApiProblem> {
    const response: ApiResponse<ApiPostResponse[]> = await this.apisauce.get("/insta-posts")

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      const rawData = response.data

      const posts: Post[] =
        rawData?.map((raw) => ({
          ...raw,
        })) ?? []

      return { kind: "ok", posts }
    } catch (e) {
      if (__DEV__ && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
}

export const postApi = new PostApi()
