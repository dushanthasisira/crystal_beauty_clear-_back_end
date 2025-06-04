import express from 'express';
import { createOder, getOrderList } from '../Controller/oderContrlller.js';

const oderRouter = express.Router();

oderRouter.post("/", createOder)
oderRouter.get("/", getOrderList)

export default oderRouter;