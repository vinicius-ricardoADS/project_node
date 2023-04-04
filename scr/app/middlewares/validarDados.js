export function validarDados(req) {
    if (req.path == "/login") {
        if (req.body.usuario !== null || req.body.usuario !== "" && req.body.senha !== null && req.body.senha !== "") 
            return true;
        return false;
    }
}