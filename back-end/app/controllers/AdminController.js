import Admin from "../modules/Administrador.js";

function findAll (req, res) {
    Admin.findAll().then((result) => res.json(result));
}

async function findAdmin (req, res) {
    return await Admin.findOne({
        where: {
            usuario: req.body.usuario,
            senha: req.body.senha,
        }
    });
}

async function findAdminByPk (req, res) {
    return await Admin.findByPk(req.params.id);
}

function addAdmin (req, res) {
    Admin.create({
        nome: req.body.nome,
        usuario: req.body.usuario,
        senha: req.body.senha
    }).then((result) => res.json(result))
}

export {findAdmin, addAdmin, findAll, findAdminByPk};