
import express, { Request, Response } from "express"

import dotenv from "dotenv"

import path from "path"

import cors from "cors"

import { router } from "../routers/router"


dotenv.config()

export const server = express()

server.use(express.json())

server.use(cors())

server.use(router)

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}))


server.use((req: Request, res: Response) => {
  try {
    res.status(200).send(`Servidor Rodando no endereço http://localhost:${process.env.PORT}`)
  } catch (error) {
    res.status(400).send(`Servidor Falhou Conexão`)
  }
})

server.listen(process.env.PORT)

