export function validarDadosAdmin(req) {
    if (req.path == "/") {
        if (req.body.usuario !== null && req.body.usuario !== "" && req.body.senha !== null && req.body.senha !== "") 
            return true;
        return false;
    }
}