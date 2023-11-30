
import { Request, Response } from 'express'

import { JogadorService } from '../services/jogadorService'


const jogadorService = new JogadorService()


export const JogadorController = {

  home (req: Request, res: Response) {
    try {
      res.json({Pagina_Home_Jogador: 'Bem Vindos a Pagina Home do Seu Jogador!!'})
    } catch (error) {
      res.json({Pagina_Home_Jogador: 'Pagina Home Falhou'})
    }
  },

  async create (req: Request, res: Response) {
    let { nome, posicao, caracteristica, fktime } = req.body
    const novoJogador = await jogadorService.create(nome, posicao, caracteristica, fktime)
    try {
      res.status(201).json({Novo_Jogador: novoJogador})
    } catch (error) {
      res.status(404).json({Error: 'Erro ao cadastrar Jogador'})
    }
  },

  async findAll (req: Request, res: Response) {
    const jogadores = await jogadorService.redAll()
    try {
      res.status(200).json({jogadores})
    } catch (error) {
      res.status(404).json({Error: 'Nenhum Jogador Encontrado!'})
    }
  },


  async fidById (req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const jogador = await jogadorService.findById(id)
    // if (!jogador) {
    //   res.status(404)
    //   return {Error: 'Jogador não encontrado no banco de dados!'}
    // } else {
    //   res.status(200).json({Jogador: jogador})
    // }
    
    try {
      res.status(200).json({Jogador: jogador})
    } catch (error) {
      res.status(404).json({Error: 'Jogador não encontrado na Base de Dados'})
    }
  },

  async update (req: Request, res: Response) {
    let id = parseInt(req.params.id)
    let { nome, posicao, caracteristica, fktime} = req.body 
    const jogador = await jogadorService.update(id, nome, posicao, caracteristica, fktime)
    if (jogador) {
      res.status(200).json({Jogador: jogador})
    } else {
      res.status(404).json({Error: 'Jogador não encontrado'})
    }
  },


  async deletar (req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const jogador = await jogadorService.deletar(id)
    if (jogador) {
      res.status(200).json({Mensagem: 'Jogador Excluido com sucesso!'})
    } else {
      res.status(404).json({Error: 'Jogador não encontrado para Excluir..'})
    }
  }

}

