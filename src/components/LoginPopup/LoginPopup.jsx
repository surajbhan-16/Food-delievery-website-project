import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setshowLogin}) => {
    const[currstate,setcurrentstate]=useState("login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
         <div className='login-popup-title'>
            <h2>{currstate}</h2>
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt=''/>

         </div>
         <div className='login-popup-inputs'>
          {currstate==="login"?<></>:  <input type='text' placeholder='your name' required/>}
            <input type='email' placeholder='your email' required/>
            <input type='password' placeholder='your password' required />

         </div>
         <button> {currstate==='signup'?"create account":"login"}</button>
         <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>By continuing , i agreee to the terma of use and privacy policy</p>
         </div>
         {currstate==='login'?
         <p> Create a new account?<span onClick={()=>setcurrentstate('signup')}> Click here</span></p>
         :<p> Already have an account ? <span onClick={()=>setcurrentstate('login')}> Login here</span></p>}
        </form>
      
    </div>
  )
}

export default LoginPopup
