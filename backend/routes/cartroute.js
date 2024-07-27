import express from 'express';
import {addtocart,getcart,removecart} from "../controllers/cartcontroller.js"
import { authMiddleware } from '../middlewares/auth.js';



const cartrouter=express.Router();
cartrouter.post('/add',authMiddleware,addtocart);
cartrouter.post('/remove',authMiddleware,removecart);
cartrouter.get('/getcart',authMiddleware,getcart);


export{cartrouter} 