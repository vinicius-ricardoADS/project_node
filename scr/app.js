import express from "express";

import routes from "./routes/routes.js";

import db from "./database/db.js";

import dotenv from "dotenv";

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