import userModel from "../models/usermodel.js";
const addtocart=async (req,res)=>{
try{
    const userdata=await userModel.findOne({_id:req.body.userid});
    console.log(userdata);
    const cartdata=await userdata.cartData;
    console.log(cartdata);
    if(!cartdata[req.body.itemid]){
        cartdata[req.body.itemid]=1;

    }
    else{
        cartdata[req.body.itemid]+=1;
    }
    await userModel.findByIdAndUpdate(req.body.userid,{cartdata});
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
const removecart=(req,res)=>{

}
const getcart=(req,res)=>{

}
export{addtocart,removecart,getcart}