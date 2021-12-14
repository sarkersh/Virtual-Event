const mysql = require('mysql2');

//const router = express.Router()

const db = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DATABASE
});

db.connect();

module.exports = db