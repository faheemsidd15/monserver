export default (sequelize, DataTypes) => {
  const Expense = sequelize.define('expenses', {
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

  Expense.associate = (models) => {
    Expense.hasOne(models.Users, {
      through: 'user',
      foreignKey: 'userId',
    });
  };

  return Expense;
};
