import Sequelize from "sequelize"

import database from "../../database/db.js"

import Consulta from "./Consulta.js";

const Medico = database.define("medicos", {
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
    crm: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        primaryKey: false
    },
    datanasc: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        primaryKey: false
    },
    salario: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        primaryKey: false
    },
    sexo: {
        type: Sequelize.CHAR(1),
        allowNull: true,
        primaryKey: false
    }
});

Consulta.belongsTo(Medico, {
    constraint: true,
    foreignKey: "idMedico"
})

Medico.hasMany(Consulta, {
    foreignKey: "idMedico"
});

export default Medico;