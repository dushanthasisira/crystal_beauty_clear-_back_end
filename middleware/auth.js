
 import dotenv from 'dotenv';
 dotenv.config();
 import jwt, { decode } from "jsonwebtoken";
export default function veryfyJWT  (req,res,next){
   const  header = req.header("Authorization");
   if(header != null) {
    const token = header.replace("Bearer ","");
    jwt.verify(token,process.env.TWT_KEY,(err , decoded)=>{
       if(decoded != null){
        req.user = decoded
       }
    })
   }
    next()
  }