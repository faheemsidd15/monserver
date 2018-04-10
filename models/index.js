import Sequelize from 'sequelize';

const sequelize = new Sequelize('moneyo', 'postgres', 'postgres', 'postgres');


const models = {

  User: sequelize.import('./users'),
  Expense: sequelize.import('./expenses'),
  Income: sequelize.import('./incomes'),
};


Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
