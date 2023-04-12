import { Request, Response, Router } from "express"
import ClientService from "../services/clients.service"

const routes = Router()

routes.get('/clients', ClientService.findAll)

routes.get('/', (_: Request, response: Response) => {
  response.status(200).send({
    success: true
  })
})

export default routes