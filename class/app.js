import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()
import { dbmongo } from "../helpers/Db/mongodb.js";
import { producto } from "../routes/index.js";
export class Server {
  constructor() {
    //Express
    this.app = express();
    //db
    this.db()
    //Middleware
    this.middleware();
    //ruta
    this.rutas();
  }

  middleware(){
    this.app.use(express.json())
  };
  async db(){
      await dbmongo();
  }
  rutas() {
    this.app.use("/api/v1/producto", producto)
  };
  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`http://${process.env.IP}:${process.env.PORT}`);
    });
  }
}
