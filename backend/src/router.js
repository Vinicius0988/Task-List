// Importa o Express para usar o sistema de rotas
const express = require('express');

// Cria um novo roteador (Router) do Express
const router = express.Router();

// Importa o controlador responsável pelas tarefas
const taskController = require('./controllers/taskControllers');
router.post('/tasks', taskController.createTask);
// Define a rota GET para "/tasks", que chama a função getAll do controller
router.get('/tasks', taskController.getAll);

// Exporta o roteador para ser usado na aplicação principal (app.js)
module.exports = router;
