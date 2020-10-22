require('dotenv').config();

const dbName = process.env.NODE_ENV === 'test' ? process.env.DB_NAME_TEST : process.env.DB_NAME

const config = {
    port: process.env.NODE_ENV === 'test' ? 3001 : process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName
};

module.exports = config;