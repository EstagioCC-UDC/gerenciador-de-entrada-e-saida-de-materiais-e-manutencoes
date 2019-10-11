module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      {
        tableName: 'materiais',
        schema: 'gesmm',
      },
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        limiar_estoque: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        unidade_medida: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        estoque_total: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        quantidade_caixa: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        identificador_caixa: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }
    );
  },

  down: queryInterface => {
    return queryInterface.dropTable({
      tableName: 'materiais',
      schema: 'gesmm',
    });
  },
};
