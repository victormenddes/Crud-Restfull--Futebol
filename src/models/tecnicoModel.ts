
import { Model, DataTypes } from "sequelize"

import { conexao } from "../instances/pg"

export interface TecnicoInstance extends Model {

    id: number,
    nome: string,
    conquista: number,
    esquema_tatico: string
}

export const TecnicoModel = conexao.define<TecnicoInstance>('tecnico', {
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

  conquista: {
    type: DataTypes.STRING,
    allowNull: false
  },

  esquema_tatico: {
    type: DataTypes.STRING,
    allowNull: false
  }
},

{
  tableName: 'tecnico',
  timestamps: false
}

)

