module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  ),

  down: async () => {},
};

// O changeColumn esta editando uma coluna, no caso email
// Para que ela se torne um valor único como descrito em unique: true
