import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno'; // Tabela de Alunos
import User from '../models/User'; // Tabela de Usuários
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
/* Esse Index faz a conecção dos models com o database, se eu tiver mais módulos devo
colocá-los aqui. O forEach se encarregará de passar por eles para fazer a conexão.
*/
