import express from 'express';
import bodyPaser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/prodcutRouter.js';
import veryfyJWT from './middleware/auth.js';
import oderRouter from './routes/oderRouter.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO_URL).then(
  ()=>{
    console.log("Connected To The Database")
  }  
).catch(
     ()=>{
    console.log("Connection Failed")
  }  
)

app.use(bodyPaser.json());
app.use(veryfyJWT);

app.use("/api/user",userRouter)
app.use("/api/prodcut", productRouter)
app.use("/api/order", oderRouter)

app.listen(5000,()=>{
    console.log('server is runiing now')
})