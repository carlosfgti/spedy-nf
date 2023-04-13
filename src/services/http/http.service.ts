import axios from "axios"
import { DefaultResponse } from "./DefaultResponse"

const defaultHeader = {
  headers: {
    Accept: 'application/json',
    'X-Api-Key': process.env.SPEDY_TOKEN_API
  },
}

export class HttpService {
  static get = async (endpoint: string): Promise<DefaultResponse> => {
    const { data, status } = await axios.get(
      process.env.SPEDY_URL_API + endpoint,
      defaultHeader,
    )

    return { data, status }
  }

  static post = async (endpoint: string, body: object): Promise<DefaultResponse> => {
    const { data, status } = await axios.post(
      process.env.SPEDY_URL_API + endpoint,
      body,
      defaultHeader,
    )

    return { data, status }
  }
}