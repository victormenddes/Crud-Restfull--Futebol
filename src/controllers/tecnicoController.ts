
import { Request, Response } from 'express'

import { TecnicoModel } from '../models/tecnicoModel'

import { TecnicoService } from '../services/tecnicoService'

const tecnicoService = new TecnicoService()

export const TecnicoController = {

  home (req: Request, res: Response) {
    try {
      res.json({Pagina_Home_Tecnico: 'Bem Vindos a Pagina Home do Seu Tecnico!!'})
    } catch (error) {
      res.json({Pagina_Home_Tecnico: 'Pagina Home Falhou'})
    }
  },

  async createTecnico (req: Request, res: Response) {
    let { nome, conquista, esquema_tatico } = req.body
    const novoTecnico = await tecnicoService.create(nome, conquista, esquema_tatico)
    try {
      res.status(201).json({Novo_Tecnico: novoTecnico})
    } catch (error) {
      res.status(404).json({Error: 'Erro ao cadastrar tecnico'})
    }
  },

  async getALLTecnicos (req: Request, res: Response) {
    try {
      const tecnicos = await tecnicoService.redAll()
      res.status(200).json({tecnicos})
    } catch (error) {
      res.status(404).json({Error: 'Erro ao buscar tecnicos'})
    }
  },


  async fidById (req: Request, res: Response) {
    let id = parseInt(req.params.id)
    try {
      const tecnico = await tecnicoService.findById(id)
      res.status(200).json({tecnico})
    } catch (error) {
      res.status(404).json({Error: 'Erro ao buscar tecnico'})
    }
  },

  async update (req: Request, res: Response) {
    let id = parseInt(req.params.id)
    let { nome, conquista, esquema_tatico } = req.body 
    const tecnico = await tecnicoService.update(id, nome, conquista, esquema_tatico)
    if (tecnico) {
      res.status(200).json({tecnico})
    } else {
      res.status(404).json({Error: 'Tecnico não encontrado'})
    }
  },


  async deletar (req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const tecnico = await tecnicoService.deletar(id)
    if (tecnico) {
      res.status(200).json({Mensagem: 'Tecnico deletado com sucesso!'})
    } else {
      res.status(404).json({Error: 'Tecnico não encontrado..'})
    }
  }

}

