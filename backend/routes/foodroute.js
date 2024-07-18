import express from "express"
import { addfood ,listfood,removefood} from "../controllers/foodcontroller.js"
import multer from "multer"

const foodRouter=express.Router();
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload=multer({storage:storage})
foodRouter.post("/add",upload.single("image"),addfood)
foodRouter.get("/listfood",listfood)
foodRouter.post("/remove",removefood)












export default foodRouter