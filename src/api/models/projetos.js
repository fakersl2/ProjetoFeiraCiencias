
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projetos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      projetos.hasMany(models.avaliacoes, {foreignKey:'projeto_id'})
      projetos.hasMany(models.projetosXcategorias, {foreignKey:'projeto_id'})
    }
  }
  projetos.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'projetos',
  });
  return projetos;
};