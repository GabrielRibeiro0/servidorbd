const express = require('express');
const userRoutes = require('./routes/userRoutes');  //rotas do usuario

const app = express();
const port = 3000;      //porta onde o servidor vai rodar

app.use(express.json());

app.get('/', (req, res) => {        //rota raiz para testar se o servidor está rodado. a rota de user deve ser trocada para a raiz ('/')
    res.send('Hello, World!');
});

app.use('/api', userRoutes);    //usa as rotas prefixadas com /api

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


//no postgres crie uma tabela a tabela a seguir

// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,           
//     username VARCHAR(50) NOT NULL,
//     email VARCHAR(100) NOT NULL, 
//     password VARCHAR(255) NOT NULL
//   );


// para os teste foi utilizado o aplicativo insomnia com o endereço http://localhost:3000/api/users.
// nele foi utilizado a requisição POST com corpo JSON, no corpo JSON adicionei as seguintes informações

// {
//   "username": "testuser",
//   "email": "testuser@example.com",
//   "password": "password123"
// }

// e ao utilizar o o metodo GET retornará os dados, mas sem a senha pois houve a criptografia

// OBS: colocar os dados do seu postgres no arquivo .env

// dependecias usadas: pg dotenv express bcrypt
// npm install pg dotenv express bcrypt

// a parte de GET foi utilizada para teste