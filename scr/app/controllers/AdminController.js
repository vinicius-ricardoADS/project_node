import Admin from "../modules/Administrador.js";

function findAdmin (req, res) {
    Admin.findByPk(req.params.id).then((result) => res.json(result));
}

function addAdmin (req, res) {
    Admin.create({
        usuario: req.body.usuario,
        senha: req.body.senha
    }).then((result) => res.json(result))
}

export {findAdmin, addAdmin};