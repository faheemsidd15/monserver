import Sequelize from 'sequelize';

const sequelize = new Sequelize(config.database, config.username, config.password, config);







const models = {

   user: sequelize.import(path.join(__dirname, file));
};



Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models
