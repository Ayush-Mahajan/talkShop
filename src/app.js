const express = require('express');
const app = express();
const routes = require('./routes/v1');
const port = 1234;
const rateLimit = require('express-rate-limit');
var bodyParser = require('body-parser');
const { Client } = require('pg');

// allowing only 10 request from an ip in a 1 min window
const limiter = rateLimit({
    max: 10,
    windowMs: 1 * 60 * 1000,
    message: "Easy on the gas! You've zipped past the API speed limit!!!"
});

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'talkShop',
    password: 'password123',
    port: 5432,
})

app.use(limiter)
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`app is running on PORT ${port}`)
})