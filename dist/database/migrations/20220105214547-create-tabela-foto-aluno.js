"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('fotos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    originalname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    aluno_id: { // isso cria uma chave do aluno para foto
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { // aqui é onde faremos essa referência
        model: 'alunos', // Identifica a tabela
        key: 'id', // define a chave
      },
      onDelete: 'SET NULL', // se apagar ou atualizar a primary key do pai a foreign key configura pra null
      onUpdate: 'CASCADE', // se o pai for deletado o filho também será
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('fotos'),
};
