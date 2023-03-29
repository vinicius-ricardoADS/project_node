const Paciente = require("../modules/paciente.js");

function findAll (req, res) {
    Paciente.findAll().then((result) => res.json(result));
}

function findPaciente (req, res) {
    Paciente.findByPk(req.params.id).then((result) => res.json(result))
    console.log(req.params);
}

function addPaciente (req, res) {
    Paciente.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        sexo: req.body.sexo,
        datanasc: req.body.datanasc
    }).then((result) => res.json(result))
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
    await Paciente.destroy({
        where: {
            id: req.params.id,
        },
    });

    Paciente.findAll().then((result) => res.json(result));
}

module.exports = {findAll, findPaciente, addPaciente, updatePaciente, deletePaciente};