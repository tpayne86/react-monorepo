import Sequelize from 'sequelize';
import * as appConfig from '../config/app';

export const sequelize = new Sequelize(
  appConfig.MYSQL_DB_NAME,
  appConfig.MYSQL_DB_USER_NAME,
  appConfig.MYSQL_DB_USER_PASS,
  {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

export const testConnection = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.'); // eslint-disable-line
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err); // eslint-disable-line
    });
};

export const transaction = () => sequelize.transaction;
