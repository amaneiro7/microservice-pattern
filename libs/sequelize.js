const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const SetupModels = require('../db/models');

const {
  dbUser,
  dbPassword,
  dbHost,
  dbPort,
  dbName,
} = config

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;


const sequelize = new Sequelize(URI,  {
  dialect: 'postgres',
  logging: true,
});

SetupModels(sequelize);

module.exports = sequelize;
