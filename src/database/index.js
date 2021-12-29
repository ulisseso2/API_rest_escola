import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

/* Esse Index faz a conecção dos models com o database, se eu tiver mais módulos devo
colocá-los aqui. O forEach se encarregará de passar por eles para fazer a conexão.
*/
