Servidor conectado com banco de dados postgres

criado testes na rota raiz('/'). e um metodo GET para retorno dos dados dos usuarios.
a rota dos usuarios ('api/user') deve ser trocada para a raiz('/')

testes realizados com aplicativo insomnia no endereço http://localhost:3000/api/users

# Requisitos

node.js
postgreSQL

## Dependencias

pg 
dotenv 
express 
bcrypt

# Configuração

1. instale as dependencias
2. configure o banco de dados e crie a tabela users
3. troque os exemplos do arquivo .env para as suas informações
4. inicie o servidor
5. realize teste com o metodo POST no endereço http://localhost:3000/api/users