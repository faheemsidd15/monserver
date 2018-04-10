export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      unique: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,

  });

  //   User.associate = (models) => {
  //     User.belongsToMany(models.Group, {
  //       through: 'member',
  //       foreignKey: 'userId',
  //     });
  //   };

  return User;
};
