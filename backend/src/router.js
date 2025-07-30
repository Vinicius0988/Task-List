const express = require('express')

const router = express.Router();

//router.get('/tasks', (request, response) => response.status(200).send("o router ta funcionando"));
router.get('/', (request, response) => response.status(200).send("o router ta funcionando"));
router.get('/', (request, response) => response.status(200).send("o router ta funcionando"));
router.get('/', (request, response) => response.status(200).send("o router ta funcionando"));
router.get('/', (request, response) => response.status(200).send("o router ta funcionando"));
router.get('/', (request, response) => response.status(200).send("o router ta funcionando"));
router.get('/', (request, response) => response.status(200).send("o router ta funcionando"));

module.exports = router;