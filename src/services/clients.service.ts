import { Request, Response } from "express"

class ClientService {
  findAll = async (request: Request, response: Response): Promise<Response> => {
    

    return response.status(200).send({
      ok: 'ok'
    })
  }
}

export default new ClientService