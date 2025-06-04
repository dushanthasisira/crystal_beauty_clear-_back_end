import express from 'express';
import { createProdcut, deleteProdcut, getProdcut, updateProdct } from '../Controller/productController.js';


const prodcutRouter = express.Router();
prodcutRouter.post("/",createProdcut)
prodcutRouter.get("/",getProdcut)
prodcutRouter.delete("/:productId",deleteProdcut)
prodcutRouter.put("/:productId",updateProdct)

export default prodcutRouter;