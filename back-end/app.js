import express from "express";

import cors from 'cors';

import routesClinica from "./routes/routesClinica.js";

import db from "./database/db.js";

import dotenv from "dotenv";

const app = express();

async function start () {
    dotenv.config();

    await db.sync();

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cors())

    app.use("/", routesClinica);

    try {
        app.use(routesClinica);
        await app.listen({ port: 8888 });
    } catch (error) {
        console.log(error);
    }
}

start();