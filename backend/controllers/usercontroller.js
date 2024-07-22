import userModel from "../models/usermodel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const createtoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
const loginuser=()=>{

}


const registeruser=async(req,res)=>{
  const{name,password,email}=req.body;
    try{
const exists=await userModel.findOne({email})
if(exists){
   return  res.json({success:false,message:"user already exists"})
}
if(!validator.isEmail(email)){
    return res.json({success:false,message:"please enter a valid email"})
}
if(password.length<8){
    return res.json({success:false,message:"pease enter a strong password"})
}
const salt=await bcrypt.genSalt(10)
const hashedpassword=await bcrypt.hash(password,salt)
const newUser=new userModel(
    {
        name:name,
        email:email,
        password:hashedpassword
    }
)
const user=await newUser.save()
const token=createtoken(user._id)
res.json({
    success:true,
    token
})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}
export  { registeruser,loginuser }