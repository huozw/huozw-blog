var myqsl = require('mysql');

module.exports = dbName => {
  var connection = myqsl.createConnection({
    host: 'sh-cdb-3ssf8x34.sql.tencentcdb.com',
    port: '59182',
    user: 'root',
    password: 'Hzw1246523594!',
    database: dbName,
  });
  connection.connect();
  return connection;
};
