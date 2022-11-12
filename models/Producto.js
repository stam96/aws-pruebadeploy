import {Schema, model} from "mongoose";
const productoSchema = new Schema({
    nombre:{
        type:String
    },
    precio:{
        type:Number
    }
},{
    versionKey:false,
    timestamps:true
});
export const productModel = model("Producto", productoSchema)