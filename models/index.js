import Sequelize from 'sequelize';

const sequelize = new Sequelize('moneyo', 'postgres', 'postgres');


const models = {

  user: sequelize.import('./users'),
};


Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
