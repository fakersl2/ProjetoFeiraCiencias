
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('avaliacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo:{
        type: Sequelize.INTEGER
      },
      nota: {
        type: Sequelize.STRING
      },
      comentario: {
        type: Sequelize.STRING
      },
      projeto_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'projetos', key: 'id' }
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('avaliacoes');
  }
};