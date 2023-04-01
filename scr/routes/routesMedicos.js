import express from "express";

import { findAll, findMedico, addMedico, updateMedico, deleteMedico } from "../app/controllers/MedicoController.js";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send("Bem vindo aos Médicos");
})

router.get("/lista", findAll);

router.get("/lista/:id", findMedico);

router.post("/cadastro", addMedico);

router.put("/cadastro/:id", updateMedico);

router.delete("/remover/:id", deleteMedico);

export default router;