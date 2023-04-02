import express from "express";

import { findAdmin, addAdmin } from "../app/controllers/AdminController";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send("Bem vindo ao cadastro de Admin");
})

router.post("/cadastro", addAdmin);

router.get("/lista/:id", findAdmin);

export default router;