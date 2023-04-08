import express from "express";

import { findAll, findConsulta, addConsulta, updateConsulta, deleteConsulta } from "../app/controllers/ConsultaController";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send("Bem vindo as Consultas");
})

router.get("/lista", findAll);

router.get("/lista/:id", async (req, res, next) => {
    const consulta = await findConsulta(req, res);
    res.status(200).json(consulta);
});

router.post("/cadastro", async (req, res, next) => {
    const consulta = await addConsulta(req, res);
    res.status(200).json(consulta);
});

router.put("/cadastro/:id", updateConsulta);

router.delete("/remover/:id", deleteConsulta);

export default router;