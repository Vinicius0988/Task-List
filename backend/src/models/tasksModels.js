// Importa a conexão com o banco de dados MySQL
const connection = require("./connection")

// Função assíncrona para buscar todas as tarefas do banco de dados
const getAll = async () => {
    // Executa a query SQL e desestrutura o resultado para obter somente as tarefas
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks; // Retorna o array de tarefas
}

// Função assíncrona para criar uma nova tarefa
const createTask = async (task) => {
    const { title } = task; // Extrai o título do objeto recebido

    // Gera a data e hora atual em formato UTC
    const dateUTC = new Date(Date.now()).toUTCString();

    // Monta a query SQL para inserir a nova tarefa
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)';

    // Executa a query passando os valores: título, status padrão 'pendente', e data de criação
    const [createTask] = await connection.execute(query, [title, 'pendente', dateUTC]);

    return createTask; // Retorna o resultado da inserção
}

// Exporta as funções para que possam ser usadas em outros arquivos
module.exports = {
    getAll,
    createTask,
};
