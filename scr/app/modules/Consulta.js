import Sequelize from "sequelize";

import database from "../../database/db.js";

const Consulta = database.define("consultas", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idMedico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false
    },
    idPaciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: false
    },
    hora: {
        type: Sequelize.TIME,
        allowNull: false,
        primaryKey: false
    }
});

export default Consulta;