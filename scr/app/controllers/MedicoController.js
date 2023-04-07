import Medico from "../modules/Medico.js";

function findAll (req, res) {
    Medico.findAll().then((result) => res.json(result));
}

async function findMedico (req, res) {
    return await Medico.findOne({
        where: {
            nome: req.body.nome
        }
    });
}

function addMedico (req, res) {
    Medico.create({
        nome: req.body.nome,
        crm: req.body.crm,
        sexo: req.body.sexo,
        datanasc: req.body.datanasc,
        salario: req.body.salario
    }).then((result) => res.json(result))
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
    await Medico.destroy({
        where: {
            id: req.params.id,
        },
    });

    Medico.findAll().then((result) => res.json(result));
}

export {findAll, findMedico, addMedico, updateMedico, deleteMedico};