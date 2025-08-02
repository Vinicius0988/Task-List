// Importa o módulo mysql2 com suporte a Promises
const mysql = require("mysql2/promise");

// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

// Cria um pool de conexões com o banco de dados usando as variáveis de ambiente
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,        // Endereço do host do banco (ex: localhost)
    user: process.env.MYSQL_USER,        // Usuário do MySQL (ex: root)
    password: process.env.MYSQL_PASSWORD,// Senha do usuário
    database: process.env.MYSQL_DB       // Nome do banco de dados
});

// Exporta a conexão para ser usada em outros arquivos do projeto
module.exports = connection;
