import {Router} from "express";
import { crearProducto, visualizarProducto } from "../controller/producto.js";
const router = Router();
router.post("/",crearProducto);
router.get("/", visualizarProducto);
export {router}