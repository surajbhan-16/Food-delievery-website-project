import userModel from "../models/usermodel.js";
const addtocart=async (req,res)=>{
try{
    const userdata=await userModel.findOne({_id:req.body.userid});
    console.log(userdata);
    const cartData=await userdata.cartData;
    console.log(cartData);
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId]=1;

    }
    else{
        cartData[req.body.itemId]+=1;
    }
    let updateduser=await userModel.findByIdAndUpdate(req.body.userid,{cartData},{new:true});
    console.log(updateduser);
    console.log(cartData);
        res.json({
        success:true,
        message:"added to cart"
    });
}catch(error){
    console.log(error);
    res.json({
        success:false,
        message:"error"
    })
}
}
const removecart=async(req,res)=>{
    try{
        let userData=await userModel.findById(req.body.userid);
        let cartData=await userData.cartData
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1
        }
        await userModel.findByIdAndUpdate(req.body.userid,{cartData})
        console.log(cartData);
        res.json({sucess:true,
            message:"removed from cart"
        })
    }
    catch(error){
        console.log(error);
        res.json({success:false,
            message:"error"
        })
    }

}
const getcart=async(req,res)=>{
    try{
let  userdata=await userModel.findById(req.body.userid);
let cartData=await userdata.cartData;
res.json({success:true,cartData});
}
catch(error){
    console.log(error);
    res.json({success:false,message:"error"});
}
}
export{addtocart,removecart,getcart}