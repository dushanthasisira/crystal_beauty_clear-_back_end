import Product from "../models/product.js";

export async function createProdcut(req,res){
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
   try {
     await product.save()
     res.json({
        message : "Prodcut Saved Successfull"
     })

   }catch{
     res.json({
        message : "Prodcut Not Saved "
     })

   }
  

   
   
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

export async function getPrudctById(req, res, params) {
  try {
  
    const productId = req.params.id;

    const product = await Product.findOne({ productId: productId });

    if (product == null) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    return res.json({
      product: product
    });

  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
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

 

