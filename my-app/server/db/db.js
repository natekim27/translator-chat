const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

pool.on("connect", () => {
    console.log("Connected to database!");
});

pool.on("end", () => {
    console.log("Disconnected from database :(");
});

module.exports = pool;