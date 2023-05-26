import express from "express";

import routesPaciente from "./routesPaciente.js";

import routesMedico from "./routesMedicos.js";

import routesConsulta from "./routesConsulta.js";

import routesAdmin from "./routesAdmin.js";

import path from "path";

import { validarDadosAdmin } from "../app/middlewares/validarDados.js";

import { findAdmin } from "../app/controllers/AdminController.js";

import jwt from "jsonwebtoken";

import fs from "fs";

const router = express.Router();

var token;

router.get("/", (req, res, next) => {
    res.status(200).send("Bem vindo a clinica");
})

router.post("/", async (req, res, next) => {
    if (token) {
        res.status(200).json({auth: true, token: token})
    } else if (req.body !== null) {
        if (validarDadosAdmin(req)) {
            const admin = await findAdmin(req, res);
            if (admin != null) {
                const privateKey = fs.readFileSync(path.resolve(__dirname, "../app/keys_jwt/private.key"), "utf-8");
                
                token = jwt.sign({username: admin.nome, id: admin.id}, privateKey, {
                    algorithm: "RS256"
                })
    
                res.status(200).json({
                    auth: true,
                    token: token
                });
            } else {
                res.redirect(303, "/admin");
            }
        } else {
            res.status(400).json({
                mensagem: "Valores de campos nulos ou vazios",
            });
        }
    } else {
        res.status(400).json({
            mensagem: "Token inválido",
        });
    }
})

router.post('/invalidToken', (req, res, next) => {
    if (token) {
        token = null
        res.status(200).json({
            auth: false
        })
    }
})

function verificaToken(req, res, next) {

    if (!token) 
        return res.status(401).json({aMIIBCgKCAQEA3A3OGIzs7SOuCfBdWVpn2ruth: false,mensagem: "Token não informado"});
    const publicKey = fs.readFileSync(path.resolve(__dirname, "../app/keys_jwt/public.key"), "utf-8");

    jwt.verify(token, publicKey, {algorithms: ["RS256"]}, (err, decoded) => {
        if (err)
            res.status(401).json({auth: false, mensagem: "Token inválido"})
        next();
    }) 
}

router.use("/admin", routesAdmin);

router.use("/pacientes", routesPaciente);

router.use("/medicos", verificaToken, routesMedico);

router.use("/consultas", verificaToken, routesConsulta);

export default router;