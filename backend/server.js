import express from"express"
import cors from "cors"
import { connectdb } from "./config/db.js"
import foodRouter from "./routes/foodroute.js"
import userrouter from "./routes/userroute..js"


const app=express()
const port=4000
//middlewares
app.use(express.json())
app.use(cors())

connectdb()

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userrouter)

app.get("/",(req,res)=>{
    res.send("api is working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://Surajbhan16:Surajbhan30@cluster0.qf70u1q.mongodb.net/?