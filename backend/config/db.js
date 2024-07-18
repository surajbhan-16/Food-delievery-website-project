import mongoose from "mongoose";
export const connectdb=async()=>{
    await mongoose.connect('mongodb+srv://Surajbhan16:Surajbhan30@cluster0.qf70u1q.mongodb.net/FOODDELIEVERYWEBSITE').then(()=>console.log('db is connected'))
}