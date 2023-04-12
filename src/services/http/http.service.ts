import axios from "axios"
import { DefaultResponse } from "./DefaultResponse"

export class HttpService {
  static get = async (endpoint: string): Promise<DefaultResponse> => {
    const { data, status } = await axios.get(
      process.env.SPEDY_URL_API + endpoint,
      {
        headers: {
          Accept: 'application/json',
          'X-Api-Key': process.env.SPEDY_TOKEN_API
        },
      },
    )

    return { data, status }
  }
}