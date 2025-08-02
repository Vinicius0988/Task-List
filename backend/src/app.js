// Importa o framework Express para criar o servidor HTTP
const express = require("express");

// Importa o módulo de rotas definido no arquivo 'router.js'
const router  = require("./router");

// Cria uma instância da aplicação Express
const app = express();

app.use(express.json());

// Usa as rotas definidas no módulo router (middleware)
app.use(router);

// Exporta a aplicação para que possa ser usada em outro lugar (ex: no server.js)
module.exports = app;
