const { Pool } = require('pg'); //importa pool do pg
require('dotenv').config(); //carrega as variaveis do .env

const pool = new Pool({ //configura uma pool de conexões ao postgres
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

module.exports = {  //exporta um objeto com o método query para fazer consultas no postgres
    query: (text, params) => pool.query(text, params),
};