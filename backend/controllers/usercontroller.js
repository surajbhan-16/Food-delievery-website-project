import userModel from "../models/usermodel";



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
const salt=await bcrypt.gensalt(10)
const hashedpassword=await bcrypt.hash(password,salt)
const newUser=new userModel(
    {
        name:name,
        email:email,
        password:hashedpassword
    }
)
const user=await newUser.save()
    }
    catch(error){
        
    }
}
