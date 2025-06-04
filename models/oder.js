import mongoose from "mongoose";
const oderSchema = new mongoose.Schema({
    oderId : {
        type : String,
        required : true,
        unique : true

    },
    date : {
          type : Date,
        required : true,
        default :Date.now

    },
    email : {
          type : String,
        required : true
    },
    name :{
          type : String,
        required : true

    },
    address : {
          type : String,
        required : true
    },
    status : {
          type : String,
        required : true,
        default : "Pending"

    },
    phoneNumber :{
        type : String,
        required : true
    },
    billItems : {
        type : [
            {
                productId : String,
                productName : String,
                images : String,
                quantity : Number,
                price : Number

            }
        ],
        required : true
    },
    total :{
        type : Number,
        required : true
    }
})

const Oder = mongoose.model("orders", oderSchema)
export default Oder;