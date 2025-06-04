
 import jwt, { decode } from "jsonwebtoken";
export default function veryfyJWT  (req,res,next){
   const  header = req.header("Authorization");
   if(header != null) {
    const token = header.replace("Bearer ","");
    jwt.verify(token,"New2025",(err , decoded)=>{
       if(decoded != null){
        req.user = decoded
       }
    })
   }
    next()
  }