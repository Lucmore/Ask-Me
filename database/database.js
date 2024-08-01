const { Sequelize } = require('@sequelize/core')
import { PostgresDialect } from '@sequelize/postgres';
require('dotenv').config()

const connection = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  ssl: true,
  clientMinMessages: 'notice',
});

module.exports = connection

