// Importa o pacote dotenv para carregar variáveis de ambiente do arquivo .env
const dotenv = require("dotenv");

// Chama o método config() para ativar o uso das variáveis de ambiente
dotenv.config();

// Importa a aplicação Express definida no arquivo app.js
const app = require("./app");

// Define a porta onde o servidor vai rodar (usa a variável de ambiente ou o valor padrão 3333)
const PORT = process.env.PORT || 3333;

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
