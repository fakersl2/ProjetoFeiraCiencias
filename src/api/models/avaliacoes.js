
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avaliacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      avaliacoes.belongsTo(models.projetos,{foreignKey:'projeto_id'})
      avaliacoes.belongsTo(models.usuarios,{foreignKey:'usuario_id'})
    }
  }
  avaliacoes.init({
    nota: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    projeto_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'avaliacoes',
  });
  return avaliacoes;
};