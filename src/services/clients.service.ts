import { Request, Response } from "express"
import { HttpService } from "./http/http.service";

class ClientService {
  findAll = async (request: Request, response: Response): Promise<Response> => {
    const { data, status } = await HttpService.get("/customers")

    return response.status(status).send({
      data: data
    })
  }
}

export default new ClientService