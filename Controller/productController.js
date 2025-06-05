import Product from "../models/product.js";

export function createProdcut(req,res){
    if(req.user == null){
        res.status(403).json({
            message : "You need to loging frist"
        })
        return;
    }
    if(req.user.role != "admin"){
         res.status(403).json({
            message : "You Are authorized to create a product"
        })
        return;
    }

    const product = new Product(req.body);
    product.save().then(
        ()=>{
           res.json({
            message : "Prodcut Save Successfully"
        }) 
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message : "Prodcut Not Save"
            })
        }
    )
}

export function getProdcut(req,res){
    Product.find().then(
        (products)=>{
            res.json(products)
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message : "Prodcut not found"
            })
        }
    )
}

export function deleteProdcut(req,res){
     if(req.user == null){
        res.status(403).json({
            message : "You need to loging frist"
        })
        return;
    }
    if(req.user.role != "admin"){
         res.status(403).json({
            message : "You Are authorized to create a product"
        })
        return;
    }

    Product.findOneAndDelete({        
        productId : req.params.productId
    }).then(
        ()=>{
            res.json({
                message : " Product deleted successfully"
            })
        }
    ).catch(        
            (err)=>{
                 res.status(500).json({
                message : "product Not Deleed"
            })
            }
           
        
    )

}

export function updateProdct(req,res){
    if(req.user == null){
        res.status(403).json({
            message : "You need to loging frist"
        })
        return;
    }
    if(req.user.role != "admin"){
         res.status(403).json({
            message : "You Are authorized to create a product"
        })
        return;
    }
    Product.findOneAndUpdate({
         productId : req.params.productId
    },req.body).then(
       ()=>{
        res.status(500).json({
            message : "Product  update successfull"
        })
       }
    ).catch(
        (err)=>{
            res.status(500).json({
                message: "Procuct not update"
            })
        }
    )

}

 

