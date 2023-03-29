const express = require("express");

const routes = require("./routes/routes.js");

const db = require("./database/db.js");

const dotenv = require("dotenv");

dotenv.config();

const app = express();
const porta = 8888;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

db.sync();

console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})