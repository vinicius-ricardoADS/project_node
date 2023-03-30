const routes = require("express").Router();

import { findAll, findPaciente, addPaciente, updatePaciente, deletePaciente } from "../app/controllers/pacienteController.js";

routes.get("/pacientes/lista", findAll);

routes.get("/pacientes/lista/:id", findPaciente);

routes.post("/pacientes/cadastro", addPaciente);

routes.put("/pacientes/cadastro/:id", updatePaciente);

routes.delete("/pacientes/remover/:id", deletePaciente);

export default routes;