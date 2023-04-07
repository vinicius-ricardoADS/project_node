import Consulta from "../modules/Consulta";

function findAll (req, res) {
    Consulta.findAll().then((result) => res.json(result));
}

async function findConsulta (req, res) {
    return await Consulta.findOne({
        where: {
            id: req.body.id
        }
    })
}

function addConsulta (req, res) {
    Consulta.create({
        idMedico: req.body.idMedico,
        idPaciente: req.body.idPaciente,
        data: req.body.data,
        hora: req.body.hora
    }).then((result) => res.json(result))
}

async function updateConsulta (req, res) {
    await Consulta.update(
        {
            idMedico: req.body.idMedico,
            idPaciente: req.body.idPaciente,
            data: req.body.data,
            hora: req.body.hora
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );

    Consulta.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteConsulta (req, res) {
    await Consulta.destroy({
        where: {
            id: req.params.id,
        },
    });

    Consulta.findAll().then((result) => res.json(result));
}

export { findAll, findConsulta, addConsulta, updateConsulta, deleteConsulta};