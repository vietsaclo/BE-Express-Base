const mysql = require('mysql2');
const Config = require('./Config');

var connection = mysql.createConnection({
  host: Config.DbConfig.my_host,
  port: Config.DbConfig.my_port,
  user: Config.DbConfig.username,
  password: Config.DbConfig.my_pass,
  database: Config.DbConfig.database,
});

connection.connect();
exports.querySql = (sql, params, callback) => {
  connection.query(sql, params, (error, sqlResult) => {
    if (error) {
      console.log(error);
    }
    if (callback) {
      callback(error, sqlResult);
    }
  });
}

exports.querySqlAsync = (sql, params) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (error, sqlResult) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      else {
        resolve(sqlResult);
      }
    })
  })
}

exports.closeConnection = () => {
  connection.destroy();
}