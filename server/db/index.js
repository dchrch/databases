var mysql = require('mysql');

module.exports = mysql.createConnection({
  user     : 'root',
  password : 'davidmike',
  database : 'chat'
});
