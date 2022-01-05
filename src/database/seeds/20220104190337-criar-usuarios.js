const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users', // defini a tabela que vou inserir os dados
    [ // Os objetos dentro desse array serão inseridos na tabela
      {
        nome: 'John Doe',
        email: 'john@gmail.com.br',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Snow',
        email: 'johns@gmail.com.br',
        password_hash: await bcryptjs.hash('123456s', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Camacho',
        email: 'johnc@gmail.com.br',
        password_hash: await bcryptjs.hash('123456c', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Batista',
        email: 'johnB@gmail.com.br',
        password_hash: await bcryptjs.hash('123456b', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {

  },
};
