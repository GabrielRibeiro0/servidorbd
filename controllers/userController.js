const bcrypt = require('bcrypt');   //biblioteca bcrypt para criptografia da senha
const userModel = require('../models/userModel');   //importa o modelo de usuario

const getUsers = async (req, res) => {  //busca todos os usuarios (testes)
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const createUser = async (req, res) => {    //cria novo usuario
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {     //verifica se está tudo presente
            return res.status(400).send('Missing required fields');
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);     //criptografa a senha

        const newUser = await userModel.createUser(username, email, hashedPassword);    //cria o novo usuario no banco de dados
        res.json(newUser);
    } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
    }
};

module.exports = {
    getUsers,
    createUser,
};
