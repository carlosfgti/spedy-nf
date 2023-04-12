import axios from "axios";
import { Request, Response } from "express"

class ClientService {
  findAll = async (request: Request, response: Response): Promise<Response> => {
    const { data, status } = await axios.get(
      process.env.SPEDY_URL_API + '/customers',
      {
        headers: {
          Accept: 'application/json',
          'X-Api-Key': process.env.SPEDY_TOKEN_API
        },
      },
    )

    return response.status(status).send({
      data: data
    })
  }
}

export default new ClientService