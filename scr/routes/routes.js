const routes = require("express").Router();

const paciente = require("../app/controllers/pacienteController.js");

routes.get("/pacientes/lista", paciente.findAll);

routes.get("/pacientes/lista/:id", paciente.findPaciente);

routes.post("/pacientes/cadastro", paciente.addPaciente);

routes.put("/pacientes/cadastro/:id", paciente.updatePaciente);

routes.delete("/pacientes/remover/:id", paciente.deletePaciente);

module.exports = routes;