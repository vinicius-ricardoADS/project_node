import Paciente from "../modules/Paciente.js"

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

async function findPacienteByPk (req, res) {
    return await Paciente.findByPk(req.body.idPaciente);
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

export {findAll, findPaciente, findPacienteByPk, addPaciente, updatePaciente, deletePaciente};