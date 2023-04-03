import db from "../database/db.js";

import dotenv from "dotenv";


(async () => {
    dotenv.config();

    try {
        await db.sync();
        console.log(`Conectado ao banco: ${process.env.DB_NAME}`);
    } catch (error) {
        console.log(error);
    }
})();
