
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projetosXturmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      projetosXturmas.belongsTo(models.projetos,{ foreignKey: 'projeto_id'})
      projetosXturmas.belongsTo(models.turmas,{ foreignKey: 'turma_id'})
    }
  }
  projetosXturmas.init({
    projeto_id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    turma_id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'projetosXturmas',
  });
  return projetosXturmas;
};