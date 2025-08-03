// Importa o Express para usar o sistema de rotas
const express = require('express');

// Cria um novo roteador (Router) do Express
const router = express.Router();

// Importa o controlador responsável pelas tarefas
const taskController = require('./controllers/taskControllers');
const taskMiddleware = require("./middlewares/tasksMiddleware")

// Define a rota GET para "/tasks", que chama a função getAll do controller
router.get('/tasks', taskController.getAll);
router.post('/tasks', taskMiddleware.validateTitle, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', taskMiddleware.validateTitle, taskMiddleware.validateStatus, taskController.updateTask);
// Exporta o roteador para ser usado na aplicação principal (app.js)
module.exports = router;
