
import { Model, DataTypes } from "sequelize"

import { conexao } from "../instances/pg"

import { TimeModel } from "./timeModel"

export interface JogadorInstance extends Model {

    id: number,
    nome: string,
    posicao: string,
    caracteristica: string,
    fktime: number
}

export const JogadorModel = conexao.define<JogadorInstance>('jogador', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

  posicao: {
    type: DataTypes.STRING,
    allowNull: false
  },

  caracteristica: {
    type: DataTypes.STRING,
    allowNull: false
  },

  fktime: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},

{
  tableName: 'jogador',
  timestamps: false
}

)

JogadorModel.belongsTo(TimeModel, {foreignKey: 'fktime'})
