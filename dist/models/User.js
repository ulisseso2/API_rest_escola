"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

// Modela a tabela de Usuários no banco
 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: { // diferente do ALUNOS eu vou validar esses campos, então abri os dados recebidos
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: { // tamanho do campo
            args: [3, 255],
            msg: 'O nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: { // diferente do USUÀRIO eu vou validar esses campos, então abri os dados recebidos
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
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL, // para o password ir para o hash, vou instalar o dcrypt
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter entre 6 e 20 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => { // antes de salvar ele vai criar um hash
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  } // método será usado no tokencontroller para comparar o password_hash
} exports.default = User;
