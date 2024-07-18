import React from 'react';
import {assets} from '../../assets/assets'
import  './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img  classname='logo' src={assets.logo} alt=''/>
      <img  classname='profile' src={assets.profile_image} alt=''/>
    
      
      
    </div>
  )
}

export default Navbar
