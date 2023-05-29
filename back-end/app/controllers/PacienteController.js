import Paciente from "../modules/Paciente.js"

import Consulta from "../modules/Consulta.js";

import { validarDadosPaciente } from "../middlewares/validarDados.js";

function findAll (req, res) {
    Paciente.findAll().then((result) => res.json(result));
}

async function findPaciente (req, res) {
    return await Paciente.findOne({
        where: {
            id: req.params.id
        }
    });
}

async function findPacienteByName (req, res) {
    return await Paciente.findOne({
        where: {
            nome: req.body.nome
        }
    })
}

async function findPacienteByPk (req, res) {
    return await Paciente.findByPk(req.body.idPaciente);
}

function addPaciente (req, res) {

    if (validarDadosPaciente(req)) {
        Paciente.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            sexo: req.body.sexo,
            datanasc: req.body.datanasc
        }).then((result) => res.json(result))
    } else {
        res.status(400).send("Valores de campos nulos ou vazios");
    }
}

async function updatePaciente (req, res) {
    await Paciente.update(
        {
            nome: req.body.nome,
            cpf: req.body.cpf,
            sexo: req.body.sexo,
            datanasc: req.body.datanasc
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );

    Paciente.findByPk(req.params.id).then((result) => res.json(result));
}

async function deletePaciente (req, res) {

    const consulta = await Consulta.findOne({
        where: {
            idPaciente: req.params.id
        }
    });

    if (consulta === null) {
        await Paciente.destroy({
            where: {
                id: req.params.id,
            },
        });

        Paciente.findAll().then((result) => res.json(result));
    } else {
        res.json({
            mensagem: "Paciente atualmente tem consulta marcada"
        });
    }
}

export {findAll, findPaciente, findPacienteByPk, addPaciente, updatePaciente, deletePaciente, findPacienteByName};