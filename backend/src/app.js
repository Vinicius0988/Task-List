// Importa o framework Express para criar o servidor HTTP
const express = require("express");
const cors = require("cors");

// Importa o módulo de rotas definido no arquivo 'router.js'
const router  = require("./router");

// Cria uma instância da aplicação Express
const app = express();

app.use(express.json());
app.use(cors());
app.use(router); // Usa as rotas definidas no módulo router (middleware)




// Exporta a aplicação para que possa ser usada em outro lugar (ex: no server.js)
module.exports = app;
