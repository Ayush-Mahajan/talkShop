require('dotenv').config();
// in a production level app configs can we read directly from a service like aws secrets manager 
const config = {
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
};

module.exports = config