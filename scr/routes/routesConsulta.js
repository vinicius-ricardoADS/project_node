import express from "express";

import { findAll, findConsulta, addConsulta, updateConsulta, deleteConsulta } from "../app/controllers/ConsultaController";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send("Bem vindo as Consultas");
})

router.get("/lista", findAll);

router.get("/lista/:id", (req, res, next) => {
    const consulta = findConsulta(req, res);
    res.status(200).json(consulta);
});

router.post("/cadastro", addConsulta);

router.put("/cadastro/:id", updateConsulta);

router.delete("/remover/:id", deleteConsulta);

export default router;