import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()
const uri = process.env.DBMONGO
export const dbmongo = async ()=>{
    try {
        const conexion = await mongoose.connect(uri)
        console.log("Conexion exitosa a " + conexion.connection.name)
    } catch (error) {
        console.log(error)
    }
}
