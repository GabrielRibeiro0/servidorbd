const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');    //importa o controlador de usuario

router.get('/users', userController.getUsers);  //rota para buscar os usuarios
router.post('/users', userController.createUser);   //rota para criar usuario

module.exports = router;
