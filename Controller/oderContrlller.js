
import Oder from "../models/oder.js";
import Order from "../models/oder.js";
export function createOder(req,res){
    if(req.user == null){
        res.status(401).json({
            message : "Unauthoriez"
        })
        return;
    }
    const body = req.body;
    const oderData = {
        oderId : "",
        email : req.user.email,
        name : body.name,
        address :body.address,
        phoneNumber : body.phoneNumber,
        billItems : [],
        total : 0
    }
    const lastBills = Order.find().sort({
        date : -1
    }).limit(1).then((lastBillslenght)=>{
       if(lastBillslenght == 0){
        oderData.oderId = "ORD0001"
    }else{     

         const lastBills = lastBillslenght[0];
         const lastOderId = lastBills.oderId;
         const lastOderNumber = lastOderId.replace("ORD","");
         const lastOderNumberInt = parseInt(lastOderNumber);
         const newLastOderNumberInt = lastOderNumberInt + 1;
         const nextOrderNumber = newLastOderNumberInt.toString().padStart(4, "0");
        oderData.oderId = "ORD" + nextOrderNumber;
    }

for(let i = 0; i< req.body.billItems.length; i++){
       const billItem = req.body.billItems[i];
       
}


    const order = new Order(oderData);
    order.save().then(
        ()=>{
            res.json({
                message : "Oder saved successfully"
            })
        }
    ).catch(
        (err)=>{
            console.log(err);
            res.status(500).json({
                message :  "Order not saved",
            })
        }
    )
        
        
    })
    
       
   

}

export function getOrderList (req, res) {
     if(req.user == null){
        res.status(401).json({
            message : "Unauthoriez"
        })
        return;
    }
    if(req.user.role == "admin"){

        Oder.find({
           
        }).then(
            (orders)=>{
                    res.json(orders)
            }
        ).catch(
            (err)=>{
                res.status(500).json({
                    message : "Orders not found"
                })
            }
        )
        


    }else{
        Oder.find({
            email : req.user.email
        }).then(
            (orders)=>{
                    res.json(orders)
            }
        ).catch(
            (err)=>{
                res.status(500).json({
                    message : "Orders not found"
                })
            }
        )
        

    }
}