module.exports = {
    db_config : {
        host: process.env.CDB_HOST,
        user: process.env.CDB_USER,
        password: process.env.CDB_PASS,
        database: process.env.CDB_NAME,
        port: 3306,
        ssl: true
    },
    PORT: process.env.PORT || 3000,
}