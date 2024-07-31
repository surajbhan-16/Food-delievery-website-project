import express from 'express'
import {authMiddleware}  from "../middlewares/auth.js"
import {placeholder } from "../controllers/ordercontroller.js"
import { verifyorder } from '../controllers/ordercontroller.js';


const  orderrouter=express.Router();
orderrouter.post("/place",authMiddleware,placeholder)
orderrouter.post("/verify",verifyorder)



export default orderrouter;