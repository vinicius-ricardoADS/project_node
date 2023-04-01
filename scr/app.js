import express from "express";

import routesPaciente from "./routes/routesPaciente.js";

import routesClinica from "./routes/routesClinica.js";

import routesMedico from "./routes/routesMedicos.js";

import db from "./database/db.js";

import dotenv from "dotenv";

const app = express();

async function start () {
    dotenv.config();

    await db.sync();

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    app.use("/clinica", routesClinica);

    try {
        app.use(routesPaciente);
        app.use(routesClinica);
        app.use(routesMedico);
        await app.listen({ port: 8888 });
    } catch (error) {
        console.log(error);
    }
}


start();