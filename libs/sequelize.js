import { Sequelize } from "sequelize";
import { SetupModels } from "../db/models";
import { config } from "../config/config";

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


export const sequelize = new Sequelize(URI,  {
  dialect: 'postgres',
  logging: true,
});

SetupModels(sequelize);

// module.exports = sequelize;
