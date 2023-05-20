import express from "express";

import routesClinica from "./routes/routesClinica.js";

import db from "./database/db.js";

import dotenv from "dotenv";

const app = express();

async function start () {
    dotenv.config();

    await db.sync();

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        next();
    });

    app.use("/", routesClinica);

    try {
        app.use(routesClinica);
        await app.listen({ port: 8888 });
    } catch (error) {
        console.log(error);
    }
}

start();