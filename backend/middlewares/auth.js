import jwt from "jsonwebtoken";

const authMiddleware=(req,res,next)=>{
    const token=req.headers.token;
    if(!token){
        return res.json({
            success:false,
            message:"not authorized login again"
        })
    }
    try{
        const token_decode=jwt.verify(token,process.env.JWT_SECRET);
        
        req.body.userid=token_decode.id;
        next();
    }
    catch(error){
        console.log(error);
        res.json({
            success:false,
            message:"error"  
        })
    }
}
export {authMiddleware}