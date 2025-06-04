import express from 'express';
import bodyPaser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/prodcutRouter.js';
import veryfyJWT from './middleware/auth.js';
import oderRouter from './routes/oderRouter.js';
const app = express();
mongoose.connect("mongodb+srv://new:123@cluster0.ara0jup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
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