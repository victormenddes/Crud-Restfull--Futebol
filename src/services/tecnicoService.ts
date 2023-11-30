
import { TecnicoModel } from "../models/tecnicoModel"

export class TecnicoService {

  async create(nome: string, conquista: number, esquema_tatico: string) {
    try {
      const tecnicoCriado = await TecnicoModel.create({nome, conquista, esquema_tatico})
      return tecnicoCriado
    } catch (error) {
      throw new Error( 'Erro ao buscar tecnico: ' + error)
    }
  }

  async redAll() {
    try {
      const tecnicos = await TecnicoModel.findAll()
      return tecnicos
    } catch (error) {
      throw new Error( 'Erro ao buscar tecnico: ' + error)
    }
  }

  async findById(id: number) {
    try {
      const tecnico = await TecnicoModel.findByPk(id)
      return tecnico
    } catch (error) {
      throw new Error( 'Erro ao buscar tecnico: ' + error)
    }
  }

  async update(id: number, nome: string, conquista: number, esquema_tatico: string) {
    const tecnico = await TecnicoModel.findByPk(id)
    if (tecnico) {
      tecnico.nome = nome
      tecnico.conquista = conquista 
      tecnico.esquema_tatico = esquema_tatico
      await tecnico.save()
    }
    try {
      return tecnico
    } catch (error) {
      throw new Error( 'Erro ao buscar tecnico: ' + error)
    }
  }

  async deletar(id: number) {
    const tecnico = await TecnicoModel.findByPk(id)
    if (tecnico) {
      await tecnico.destroy()
      return 'Tecnico Deletado com sucesso!'
    } else {
      return 'Tecnico NÃO encontrado para Deletar..'
    }
  }

}

