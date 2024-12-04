
import{Schema, model} from "mongoose";

const Eschemas = new Schema({
    name:String,
    edad:Number
})

 const Modelo = new model("Tabla de alumnos", Eschemas )