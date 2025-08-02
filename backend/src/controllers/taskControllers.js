// Importa o modelo que contém a lógica para acessar o banco de dados (tasksModels.js)
const tasksModel = require("../models/tasksModels");

// Função assíncrona que responde à requisição para buscar todas as tarefas
const getAll = async (_request, response) => {

    // Chama a função do modelo para obter todas as tarefas do banco de dados
    const task = await tasksModel.getAll();

    // Retorna as tarefas no formato JSON com status HTTP 200 (OK)
    return response.status(200).json(task);
}

const createTask = async (request, response) => {
    const createdTask = await tasksModel.createTask(request.body);
    return response.status(201).json(createdTask);
}

// Exporta a função para que possa ser usada nas rotas
module.exports = {
    getAll,
    createTask,
};
