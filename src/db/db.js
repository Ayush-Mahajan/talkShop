const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool({
    user: config.user,
    password: config.password,
    host: config.host,
    port: config.port, // default Postgres port
    database: config.database
});



module.exports = {
    query: (text, params) => pool.query(text, params)
};