const dotenv = require('dotenv');
dotenv.config();

const username = process.env.MYSQL_USER;
const database = process.env.MYSQL_DATABASE;
const my_host = process.env.DB_HOST;
const my_port = process.env.DB_MYSQL_PORT;
const my_pass = process.env.MYSQL_USER_PASSWORD;

const DbConfig = {
  username,
  database,
  my_host,
  my_port,
  my_pass,
}

module.exports = {
  DbConfig,
}