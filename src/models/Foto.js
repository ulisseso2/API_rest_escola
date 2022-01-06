import Sequelize, { Model } from 'sequelize';

import appConfig from '../config/appConfig';

// Modela a tabela do Aluno no banco (sequelize)
export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },

    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models) { // esse model pertence ao Aluno e a chave estrangeira é aluno_id
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    // poderia referenciar isso no model aluno ao invés do Foto
    // Para isso eu usaria this.hasOne... e o restante do this acima
  }
}
