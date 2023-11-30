
import { JogadorModel } from "../models/jogadorModel"

import { TimeModel } from "../models/timeModel"

import { TecnicoModel } from "../models/tecnicoModel"



export class JogadorService {

  async create(nome: string, posicao: string, caracteristica: string, fktime: number) {
    const jogadorCriado = await JogadorModel.create({nome, posicao, caracteristica, fktime})
    if (jogadorCriado) {
      return jogadorCriado
    } else {
      return 'Erro ao Criar um novo Jogador '
    }
    }

    async redAll() {
      try {
        const jogador = await JogadorModel.findAll({
          include: [
            {
            model: TimeModel,
            as: 'time',
            attributes: ['nome', 'divisao', 'estado_municipio'],
            include: [{
              model: TecnicoModel,
              as: 'tecnico',
              attributes: ['nome']
            }]
          }
        ],
          attributes: {exclude: ['fktime']},
        })
        return jogador
      } catch (error) {
        throw new Error( 'Erro ao buscar Jogador: ' + error)
      }
    }
  
    async findById(id: number) {
      const jogador = await JogadorModel.findByPk(id, {
        include: [{
          model: TimeModel,
          as: 'time',
          attributes: ['nome', 'divisao', 'estado_municipio'],
          include: [{
            model: TecnicoModel,
            as: 'tecnico',
            attributes: ['nome']
          }]
        }],
        attributes: {exclude: ['fktime']}
      })
      if (!jogador) {
        return { error: 'Jogador não encontrado no banco de dados!'}
      } else {
        return jogador
      }
      // try {
      //   return jogador
      // } catch (error) {
      //   return { error: 'Jogador não encontrado no banco de dados!'}
      // }
    
    }
  
    async update(id: number, nome: string, posicao: string, caracteristica: string, fktime: number) {
      const jogador = await JogadorModel.findByPk(id, {
        include: [{
          model: TimeModel,
          as: 'time',
        }],
        attributes: {exclude: ['fktime']}
      })
      if (jogador) {
        jogador.nome = nome
        jogador.posicao = posicao
        jogador.caracteristica = caracteristica
        jogador.fktime = fktime
        await jogador.save()
      }
      try {
        return jogador
      } catch (error) {
        throw new Error( 'Erro ao buscar Jogador: ' + error)
      }
    }
  
    async deletar(id: number) {
      const jogador = await JogadorModel.findByPk(id, {})
      if (jogador) {
        await jogador.destroy()
        return 'Jogador Excluido com sucesso!'
      } else {
        return 'Jogador NÃO encontrado para Excluir..'
      }
    }

}

