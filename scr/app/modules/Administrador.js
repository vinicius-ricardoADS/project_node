import Sequelize from "sequelize";

import db from "../../database/db.js";

const Admin = db.define("administradores", {
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
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false,
        unique: true
    }
});

export default Admin;