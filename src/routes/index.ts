import { Request, Response, Router } from "express"

const routes = Router()

routes.get('/clients', (_: Request, response: Response) => {
  

  response.status(200).send({
    ok: 'ok'
  })
})

routes.get('/', (_: Request, response: Response) => {
  response.status(200).send({
    success: true
  })
})

export default routes