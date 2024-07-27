require('dotenv').config();

module.exports = {
    port: process.env.PORT || 9999,
    database: process.env.DATABASE || 'mongodb://localhost:27017/mammaterra-catalogue',
    sesion_key_secret: process.env.SESSION_KEY_SECRET
}