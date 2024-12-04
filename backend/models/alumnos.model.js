
import{Schema, model} from "mongoose";

const Eschemas = new Schema({
    name:{
        type:String
    },
    Edad:{
        type:Number
    }
})

export const modelo = new model("Tabla de alumnos", Eschemas )

