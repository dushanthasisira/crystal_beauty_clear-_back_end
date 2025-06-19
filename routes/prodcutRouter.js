import express from 'express';
import { createProdcut, deleteProdcut, getProdcut, updateProdct,getPrudctById } from '../Controller/productController.js';


const prodcutRouter = express.Router();
prodcutRouter.post("/",createProdcut)
prodcutRouter.get("/",getProdcut)
prodcutRouter.get("/:id",getPrudctById)
prodcutRouter.delete("/:productId",deleteProdcut)
prodcutRouter.put("/:productId",updateProdct)

export default prodcutRouter;