import express from "express"

import { findAll, findPaciente, addPaciente, updatePaciente, deletePaciente } from "../app/controllers/PacienteController.js";

const routes = express.Router();

routes.get("/", (req, res, next) => {
    res.status(200).send("Bem vindo aos Pacientes");
});

routes.get("/lista", findAll);

routes.get("/lista/:id", findPaciente);

routes.post("/cadastro", addPaciente);

routes.put("/cadastro/:id", updatePaciente);

routes.delete("/remover/:id", deletePaciente);

export default routes;