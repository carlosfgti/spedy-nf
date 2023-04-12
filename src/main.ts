import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import routes from './routes'

const PORT = process.env.PORT || 8080

const app = express()
app.use(routes)

app.listen(PORT, () => {
  console.log(`server running in port  ${PORT}`)
})