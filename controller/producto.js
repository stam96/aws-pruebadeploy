import { request, response } from "express";
import { productModel } from "../models/Producto.js";

export const crearProducto = async (req = request, res = response) => {
    try {
        const body = req.body;
        const producto = await productModel.create(body)
        res.status(200).json(
           {
            MSJ:"Producto creado existosamente",
            producto
           }
        )
    } catch (error) {
        res.status(500).json({
            mensaje:"Error",
            error
        })
    }
};
export const visualizarProducto = async (req = request, res = response) => {
    try {
        const producto = await productModel.find();
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({
            mensaje:"Error",
            error
        })
    }
};

