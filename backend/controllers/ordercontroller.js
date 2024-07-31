import { configDotenv } from "dotenv";
import ordermodel  from "../models/ordermodel.js";
import userModel  from "../models/usermodel.js";
import   Stripe  from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

const placeholder=async(req,res)=>{0
    const frontend_url="http://localhost:5173"
  try{const neworder= new ordermodel({
    userId:req.body.userid,
    items:req.body.items,
    amount:req.body.amount,
    address:req.body.address 
  })
  await neworder.save();
   await userModel.findByIdAndUpdate(req.body.userid,{cartData:{}});
   const line_items=req.body.items.map((item)=>({
    price_data:{
        currency:"inr",
        product_data:{
            name:item.name
        },
        unit_amount:item.price*100*80
    },
    quantity:item.quantity
   }))
   line_items.push({
    price_data:{
        currency:"inr",product_data:{
            name:"delivery charge"
        },
        unit_amount:2*100*80},
        quantity:1
    
   })
   const session=await stripe.checkout.sessions.create({
    line_items:line_items,
    mode:"payment",
    success_url:`${frontend_url}/verify?success=true&orderId=${neworder._id}`,
    cancel_url:`${frontend_url}/verify?success=false&orderId=${neworder._id}`
   })
   res.json({success:true,session_url:session.url})
}
catch(error){
    console.log(error)
    res.json({
        success:false,
        message:"error"
    })
}
}
const verifyorder=async(req,res)=>{
    const{orderId,success}=req.body;
    console.log(req.body);
    try{
        if(success=='true'){
            await ordermodel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,
                message:"Paid"
            })
        }
        else{
            await ordermodel.findByIdAndDelete(orderId);
            res.json({
                success:false,
                message:"not paid"
            })
        }
    }catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}
export {placeholder,verifyorder}
