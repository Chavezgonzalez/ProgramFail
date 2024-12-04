import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from "./backend/controllers/alumos.controller.js";

dotenv.config();
mongoose.connect(process.env.urlbase)

.then(()=>{
    console.log("Esta funcionando el servidor")
})

.catch((error)=>{
    console.log("Conexion fallida al servidor ", error)
})

const app=express();
app.use(cors());

app.listen(4000, ()=>{
    console.log("Se escucha correcto.")
});

test();