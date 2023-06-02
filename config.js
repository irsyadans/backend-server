const { Pool } = require("pg");

const db = new Pool({
    user: 'postgres',
    host: 'db-instance.craffuepymr3.ap-southeast-1.rds.amazonaws.com',
    database: 'wp_cloud',
    password: 'postgres',
    port: 5432
});

module.exports = db;
