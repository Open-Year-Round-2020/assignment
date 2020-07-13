var mysql = require('mysql');
var connection = mysql.createPool({
host: 'localhost',
user: 'root',
password: '1391',
database: 'test'
});

module.exports=connection;