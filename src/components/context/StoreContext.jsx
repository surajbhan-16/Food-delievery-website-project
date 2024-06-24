import {createContext, useState} from "react";
import { food_list } from "../../assets/assets";
import { useEffect } from "react";
export const StoreContext=createContext(null)
export const StoreContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState({});
    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let TotalAmount=0;
        for( const item in cartItems ){
            if(cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                TotalAmount+=itemInfo.price*cartItems[item];
            }
        }
        return TotalAmount;
    }
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,getTotalCartAmount

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}