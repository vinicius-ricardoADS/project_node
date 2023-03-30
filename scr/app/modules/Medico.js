import Sequelize from "sequelize"

import database from "../../database/db.js"

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
        type: Sequelize.DATE,
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

export default Medico;