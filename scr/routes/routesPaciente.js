import express from "express"

import { findAll, findPaciente, addPaciente, updatePaciente, deletePaciente } from "../app/controllers/PacienteController.js";

const routes = express.Router();

routes.get("/clinica/pacientes", (req, res, next) => {
    res.status(200).send("Bem vindo aos Pacientes");
});

routes.get("/clinica/pacientes/lista", findAll);

routes.get("/clinica/pacientes/lista/:id", findPaciente);

routes.post("/clinica/pacientes/cadastro", addPaciente);

routes.put("/clinica/pacientes/cadastro/:id", updatePaciente);

routes.delete("/clinica/pacientes/remover/:id", deletePaciente);

export default routes;