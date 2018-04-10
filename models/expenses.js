export default (sequelize, DataTypes) => {
  const Expenses = sequelize.define('expenses', {
    name: {
      type: DataTypes.STRING,
      unique: false,
    },
    amount: {
      type: DataTypes.DOUBLE,
      unique: false,
    },
    due_date: {
      type: DataTypes.DATEONLY,
      unique: false,
    },

  });

  Expenses.associate = (models) => {
    Expenses.hasOne(models.Users, {
      through: 'user',
      foreignKey: 'userId',
    });
  };

  return Expenses;
};
