import Admin from "../modules/Administrador.js";

async function findAdmin (req, res) {
    return await Admin.findOne({
        where: {
            usuario: req.body.usuario
        }
    });
}

function addAdmin (req, res) {
    Admin.create({
        nome: req.body.nome,
        usuario: req.body.usuario,
        senha: req.body.senha
    }).then((result) => res.json(result))
}

export {findAdmin, addAdmin};