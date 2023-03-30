import express from "express";

import routes from "./routes/routesPaciente.js";

import db from "./database/db.js";

import dotenv from "dotenv";

const app = express();

async function start () {
    dotenv.config();

    await db.sync();

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    app.use("/clinica", (req, res, next) => {
        console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
        next();
    });

    app.get("/clinica", (req, res, next) => {
        res.status(200).send("Bem vindo a clínica");
        next();
    });

    try {
        app.use(routes);
        await app.listen({ port: 8888 });
    } catch (error) {
        console.log(error);
    }
}


start();