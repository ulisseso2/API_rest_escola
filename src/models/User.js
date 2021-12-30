import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// Modela a tabela de Usuários no banco
export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: { // diferente do ALUNOS eu vou validar esses campos, então abri os dados recebidos
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: { // tamanho do campo
            args: [3, 255],
            msg: 'O nome deve ter entre 3 e 255 caracteres',
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
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL, // para o password ir para o hash, vou instalar o dcrypt
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
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  } // método será usado no tokencontroller para comparar o password_hash
}
