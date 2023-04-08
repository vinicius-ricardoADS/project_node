import Medico from "../modules/Medico.js";

import Consulta from "../modules/Consulta.js";

import { validarDadosMedico } from "../middlewares/validarDados.js";

function findAll (req, res) {
    Medico.findAll().then((result) => res.json(result));
}

async function findMedico (req, res) {
    return await Medico.findOne({
        where: {
            id: req.params.id
        }
    });
}

async function findMedicoByPk (req, res) {
    return await Medico.findByPk(req.body.idMedico);
}

function addMedico (req, res) {

    if (validarDadosMedico(req)) {
        Medico.create({
            nome: req.body.nome,
            crm: req.body.crm,
            sexo: req.body.sexo,
            datanasc: req.body.datanasc,
            salario: req.body.salario
        }).then((result) => res.json(result))
    } else {
        res.status(200).send("Valores de campos nulos ou vazios");
    }
    
}

async function updateMedico (req, res) {
    await Medico.update(
        {
            nome: req.body.nome,
            crm: req.body.crm,
            sexo: req.body.sexo,
            datanasc: req.body.datanasc,
            salario: req.body.salario
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );

    Medico.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteMedico (req, res) {

    const consulta = await Consulta.findOne({
        where: {
            idMedico: req.params.id
        }
    });

    if (consulta == null) {
        await Medico.destroy({
            where: {
                id: req.params.id,
            },
        });
    
        Medico.findAll().then((result) => res.json(result));
    } else {
        res.json({
            mensagem: "Médico atualmente tem uma consulta marcada"
        });
    }
    
}

export {findAll, findMedico, findMedicoByPk, addMedico, updateMedico, deleteMedico};