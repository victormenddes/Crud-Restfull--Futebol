
import { Model, DataTypes } from "sequelize"

import { conexao } from "../instances/pg"

import { TecnicoModel } from "./tecnicoModel"

export interface TimeInstance extends Model {

    id: number,
    nome: string,
    divisao: string,
    estado_municipio: string,
    fktecnico: Number
}

export const TimeModel = conexao.define<TimeInstance>('time', {
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

  divisao: {
    type: DataTypes.STRING,
    allowNull: false
  },

  estado_municipio: {
    type: DataTypes.STRING,
    allowNull: false
  },

  fktecnico: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},

{
  tableName: 'time',
  timestamps: false
}

)

TimeModel.belongsTo(TecnicoModel, {foreignKey: 'fktecnico'})
