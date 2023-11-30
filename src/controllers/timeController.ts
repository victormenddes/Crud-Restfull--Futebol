
import { Request, Response } from 'express'

import { TimeModel } from '../models/timeModel'

import { TecnicoModel } from '../models/tecnicoModel'

import { TimeService } from '../services/timeServices'


const timeServices = new TimeService()


export const TimeController = {

  home (req: Request, res: Response) {
    try {
      res.json({Pagina_Home_Time: 'Bem Vindos a Pagina Home do Seu Time!!'})
    } catch (error) {
      res.json({Pagina_Home_Time: 'Pagina Home Falhou'})
    }
  },

  async create (req: Request, res: Response) {
    let { nome, divisao, estado_municipio, fktecnico } = req.body
    const novoTime = await timeServices.create(nome, divisao, estado_municipio, fktecnico)
    try {
      res.status(201).json({Novo_Time: novoTime})
    } catch (error) {
      res.status(404).json({Error: 'Erro ao cadastrar Time'})
    }
  },

  async findAll (req: Request, res: Response) {
    const times = await timeServices.redAll()
    try {
      res.status(200).json({times})
    } catch (error) {
      res.status(404).json({Error: 'Nenhum Time Encontrado!'})
    }
  },


  async fidById (req: Request, res: Response) {
    let id = parseInt(req.params.id)
    try {
      const time = await timeServices.findById(id)
      res.status(200).json({time})
    } catch (error) {
      res.status(404).json({Error: 'Erro ao buscar Time'})
    }
  },

  async update (req: Request, res: Response) {
    let id = parseInt(req.params.id)
    let { nome, divisao, estado_municipio, fktecnico} = req.body 
    const time = await timeServices.update(id, nome, divisao, estado_municipio, fktecnico)
    if (time) {
      res.status(200).json({time})
    } else {
      res.status(404).json({Error: 'Time não encontrado'})
    }
  },


  async deletar (req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const time = await timeServices.deletar(id)
    if (time) {
      res.status(200).json({Mensagem: 'Time deletado com sucesso!'})
    } else {
      res.status(404).json({Error: 'Time não encontrado..'})
    }
  }

}

