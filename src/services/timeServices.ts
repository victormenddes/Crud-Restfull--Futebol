
import { TimeModel } from "../models/timeModel"

import { TecnicoModel } from "../models/tecnicoModel"


export class TimeService {

  async create(nome: string, divisao: string, estado_municipio: string, fktecnico: number) {
    const timeCriado = await TimeModel.create({nome, divisao, estado_municipio, fktecnico})
    if (timeCriado) {
      return timeCriado
    } else {
      return 'Erro ao Criar um novo Time '
    }
    }

    async redAll() {
      try {
        const time = await TimeModel.findAll({
          include: [{
            model: TecnicoModel,
            as: 'tecnico'
          }],
          attributes: {exclude: ['fktecnico', 'id']}
        })
        return time
      } catch (error) {
        throw new Error( 'Erro ao buscar time: ' + error)
      }
    }
  
    async findById(id: number) {
      const time = await TimeModel.findByPk(id, {
        include: [{
          model: TecnicoModel,
          as: 'tecnico',
        }],
        attributes: {exclude: ['fktecnico']}
      })
      try {
        return time
      } catch (error) {
        throw new Error( 'Erro ao buscar time: ' + error)
      }
    }
  
    async update(id: number, nome: string, divisao: string, estado_municipio: string, fktecnico: number) {
      const time = await TimeModel.findByPk(id, {
        include: [{
          model: TecnicoModel,
          as: 'tecnico',
        }],
        attributes: {exclude: ['fktecnico']}
      })
      if (time) {
        time.nome = nome
        time.divisao = divisao
        time.estado_municipio = estado_municipio
        time.fktecnico = fktecnico
        await time.save()
      }
      try {
        return time
      } catch (error) {
        throw new Error( 'Erro ao buscar time: ' + error)
      }
    }
  
    async deletar(id: number) {
      const time = await TimeModel.findByPk(id, {})
      if (time) {
        await time.destroy()
        return 'Time Deletado com sucesso!'
      } else {
        return 'Time NÃO encontrado para Deletar..'
      }
    }

  }

