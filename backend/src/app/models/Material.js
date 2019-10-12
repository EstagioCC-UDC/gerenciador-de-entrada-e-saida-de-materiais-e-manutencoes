import Sequelize, { Model } from 'sequelize';

class Material extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        descricao: Sequelize.TEXT,
        limiar_estoque: Sequelize.INTEGER,
        unidade_medida: Sequelize.STRING,
        estoque_total: Sequelize.INTEGER,
        quantidade_caixa: Sequelize.INTEGER,
        identificador_caixa: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'materiais',
      }
    );

    return this;
  }
}

export default Material;
