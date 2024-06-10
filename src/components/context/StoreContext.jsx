import {createContext, useState} from "react";
import { food_list } from "../../assets/assets";
export const StoreContext=createContext(null)
export const StoreContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState({});
    const addToCart
    const contextValue={
        food_list
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}