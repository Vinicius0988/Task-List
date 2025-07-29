const express = require("express");

const app = express();

app.get('/', (request, response) => response.status(200).send("olá mundo!"));

app.listen(3333, () => console.log("server running on port 3333"));