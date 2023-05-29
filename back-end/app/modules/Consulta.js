import Sequelize from "sequelize";

import database from "../../database/db.js";

const Consulta = database.define("consultas", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: {
        type: Sequelize.DATEONLY,
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