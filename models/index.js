import Sequelize from 'sequelize';

const sequelize = new Sequelize('moneyo', 'postgres', 'postgres', {
  dialect: 'postgres',
});


const models = {

  Users: sequelize.import('./users'),
  Expenses: sequelize.import('./expenses'),
  Incomes: sequelize.import('./incomes'),
};


Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
