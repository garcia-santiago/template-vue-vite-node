let mysql = require('mysql');
let connection; 
const {db_config} = require('./config')

function connectDatabase() {
    if (!connection) {
        connection = mysql.createPool(db_config);
    }
    return connection;
}

module.exports = connectDatabase();