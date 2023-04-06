import database from "../../database/db.js"

import Sequelize from "sequelize"

import Medico from "../modules/Medico.js";

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
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: false
    }
});

Paciente.belongsTo(Medico, {
    constraint: true,
    foreignKey: "idMedico"
});

Medico.hasMany(Paciente, {
    foreignKey: "idMedico"
});

export default Paciente;