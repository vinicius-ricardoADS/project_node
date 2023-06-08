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
    var dataConsulta = new Date(req.body.data + " " + req.body.hora);
    var dataAtual = new Date();

    if (dataConsulta > dataAtual) return true;

    var isSameDate = dataConsulta.toDateString() === dataAtual.toDateString();

    if (isSameDate) {
        var isLaterTime = dataConsulta.getHours() > dataAtual.getHours() || (dataConsulta.getHours() === dataAtual.getHours() && dataConsulta.getMinutes() > dataAtual.getMinutes());
        if (isLaterTime) return true;
    }

    return false;

}

export { validarDadosAdmin, validarDadosPaciente, validarDadosMedico, validarDadosConsulta, validarDataConsulta };