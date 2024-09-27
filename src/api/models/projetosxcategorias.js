
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projetosXcategorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      projetosXcategorias.belongsTo(models.projetos,{ foreignKey: 'projeto_id'})
      projetosXcategorias.belongsTo(models.categorias,{ foreignKey: 'categoria_id'})
    }
  }
  projetosXcategorias.init({
    projeto_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'projetosXcategorias',
  });
  return projetosXcategorias;
};