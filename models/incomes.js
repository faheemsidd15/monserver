export default (sequelize, DataTypes) => {
  const Incomes = sequelize.define('incomes', {
    name: {
      type: DataTypes.STRING,

    },
    amount: {
      type: DataTypes.DOUBLE,
    },
    due_date: {
      type: DataTypes.DATEONLY,
    },

  });

  Incomes.associate = (models) => {
    Incomes.hasOne(models.Users, {
      through: 'user',
      foreignKey: 'userId',
    });
  };

  return Incomes;
};
