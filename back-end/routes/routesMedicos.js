import express from "express";

import { findAll, findMedico, addMedico, updateMedico, deleteMedico } from "../app/controllers/MedicoController.js";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        mensagem: "Bem vindo aos Médicos"
    });
})

router.get("/lista", findAll);

router.get("/lista/:id", async (req, res, next) => {
    const medico = await findMedico(req, res);
    res.status(200).json(medico);
});

router.post("/cadastro", addMedico);

router.put("/cadastro/:id", updateMedico);

router.delete("/remover/:id", deleteMedico);

export default router;