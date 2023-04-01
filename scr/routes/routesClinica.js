import express from "express";

import routesPaciente from "./routesPaciente.js";

import routesMedico from "./routesMedicos.js";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send("Bem vindo a clinica");
})

router.use("/pacientes", routesPaciente);

router.use("/medicos", routesMedico);

export default router;