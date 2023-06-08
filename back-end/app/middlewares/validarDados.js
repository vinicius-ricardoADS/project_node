function validarDadosAdmin(req) {
    if (req.path == "/") {
        if (req.body.usuario != null && req.body.usuario != "" && req.body.senha != null && req.body.senha != "") 
            return true;
        return false;
    }
}

function validarDadosPaciente (req) {
    if (req.body.nome != null && req.body.nome != "" && req.body.cpf != null && req.body.cpf != "" 
    && req.body.sexo != null && req.body.sexo != "" && req.body.datanasc != null & req.body.datanasc != "")
        return true;
    return false;
}

function validarDadosMedico (req) {
    if (req.body.nome != null && req.body.nome != "" && req.body.crm != null && req.body.crm != "" && req.body.sexo != null 
        && req.body.sexo != "" && req.body.datanasc != null & req.body.datanasc != "" && req.body.salario != null && 
        req.body.salario != "")
        return true;
    return false;
}

function validarDadosConsulta (req) {
    if (req.body.data != null && req.body.data != "" && req.body.hora != null && req.body.hora != "" 
    && req.body.idPaciente != null && req.body.idPaciente != "" && req.body.idMedico != null && req.body.idMedico != "")
        return true;
    return false;
}

function validarDataConsulta (req) {
    var dataAtual = new Date();
    var data = req.body.data + " " + req.body.hora;
    var dataConsulta = new Date(data);

    if (dataConsulta.getTime() > dataAtual.getTime()) return true;

    if (dataConsulta.getTime() == dataAtual.getTime() && dataConsulta.getHours() >= dataAtual.getHours() 
    && dataConsulta.getMinutes() >= dataAtual.getMinutes())
        return true;
    return false;
}

export { validarDadosAdmin, validarDadosPaciente, validarDadosMedico, validarDadosConsulta, validarDataConsulta };