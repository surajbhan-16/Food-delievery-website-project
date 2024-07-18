import React from 'react'
import {assets} from '../../assets/assets'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <NavLink to ="/Add" className='sidebar-option'>
          <img src={assets.add_icon} alt=''/>
          <h2>Add Icon</h2>
        </NavLink>
        <NavLink to ='List' className='sidebar-option'>
          <img src={assets.order_icon} alt=''/>
          <h2>List Items</h2>
        </NavLink>
        <NavLink to ='/orders' className='sidebar-option'>
          <img src={assets.order_icon} alt=''/>
          <h2>Order</h2>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
