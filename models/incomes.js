export default (sequelize, DataTypes) => {
  const Income = sequelize.define('incomes', {
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

  Income.associate = (models) => {
    Income.hasOne(models.Users, {
      through: 'user',
      foreignKey: 'userId',
    });
  };

  return Income;
};
