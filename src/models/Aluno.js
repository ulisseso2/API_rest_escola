import Sequelize, { Model } from 'sequelize';

// Modela a tabela do Aluno no banco (sequelize)
export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '', // se eu não colocar isso e o campo vier em branco dá erro
        validate: {
          len: {
            args: [3, 30],
            msg: 'O nome deve ter entre 3 e 30 caractéres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 30],
            msg: 'O sobrenome deve ter entre 2 e 100 caractéres',
          },
        },
      },
      email: { // diferente do ALUNOS eu vou validar esses campos, então abri os dados recebidos
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse email já está cadastrado',
        },
        validate: {
          isEmail: {
            msg: 'Email Inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idadde precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número com ponto',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'altura precisa ser um número inteiro ou com ponto',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
