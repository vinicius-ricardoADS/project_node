import db from "../database/db.js";

import dotenv from "dotenv";

async function execDb () {
    dotenv.config();

    await db.sync();

    console.log(`Conectado ao banco: ${process.env.DB_NAME}`);
}

execDb();