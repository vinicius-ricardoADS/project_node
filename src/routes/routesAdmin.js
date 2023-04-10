import express from "express";

import { findAdminByPk, findAll, addAdmin } from "../app/controllers/AdminController";

const routes = express.Router();

routes.get("/", (req, res, next) => {
    res.status(200).send("Bem vindo ao cadastro de administradores");
});

routes.get("/lista", findAll);

routes.get("/lista/:id", async (req, res, next) => {
    const admin = await findAdminByPk(req, res);
    res.status(200).json(admin);
});

routes.post("/cadastro", addAdmin);

export default routes;