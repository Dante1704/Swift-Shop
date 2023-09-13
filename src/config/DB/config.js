const dotenv = require('dotenv')
dotenv.config()

const config = {
    server: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

module.exports = config;