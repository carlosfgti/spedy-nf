import { Request, Response, Router } from "express"
import ClientService from "../services/clients.service"

const routes = Router()

routes.get('/clients', ClientService.findAll)

routes.get('/', (_: Request, response: Response) => {
  response.status(200).send({
    success: true
  })
})

routes.get('*', (_: Request, response: Response) => {
  response.status(404).send({
    error: "Not Found"
  })
})

export default routes