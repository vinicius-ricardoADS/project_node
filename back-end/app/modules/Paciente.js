import database from "../../database/db.js"

import Sequelize from "sequelize"

import Consulta from "./Consulta.js";

const Paciente = database.define("pacientes", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: false
    },
    sexo: {
        type: Sequelize.CHAR(1),
        allowNull: true,
        primaryKey: false
    },
    datanasc: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        primaryKey: false
    }
});

Consulta.belongsTo(Paciente, {
    constraint: true,
    foreignKey: "idPaciente"
});

Paciente.hasMany(Consulta, {
    foreignKey: "idPaciente"
});

export default Paciente;