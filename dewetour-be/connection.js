const {Pool} = require('pg')

const db = new Pool({
    user:"postgres",
    host:"localhost",
    database:"dewetour",
    password:"c4l35t14l",
    port:"3306"
});

module.exports = db;