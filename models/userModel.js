const db = require('../config/db'); //configuração do arquivo db.js

const getAllUsers = async () => {   //obtem os usuarios
    const result = await db.query('SELECT id, username, email FROM users');
    return result.rows;
};

const createUser = async (username, email, hashedPassword) => { //cria um novo usuario
    const result = await db.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
        [username, email, hashedPassword]
    );
    return result.rows[0];  //retorna o novo usuario sem a senha
};

module.exports = {  //exporta as funções
    getAllUsers,
    createUser,
};