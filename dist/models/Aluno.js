"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

// Modela a tabela do Aluno no banco (sequelize)
 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '', // se eu não colocar isso e o campo vier em branco dá erro
        validate: {
          len: {
            args: [3, 30],
            msg: 'O nome deve ter entre 3 e 30 caractéres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 30],
            msg: 'O sobrenome deve ter entre 2 e 100 caractéres',
          },
        },
      },
      email: { // diferente do ALUNOS eu vou validar esses campos, então abri os dados recebidos
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idadde precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número com ponto',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
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

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
