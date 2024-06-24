import React from 'react'
import './Placeorder.css'

const Placeorder = () => {
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delievery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='firstname'/>
          <input type='text' placeholder='lastname'/>
        </div>
        <input type='email' placeholder='email'/>
        <input type='text' placeholder='street'/>
        <div className='multi-fields'>
          <input type='text' placeholder='city'/>
          <input type='text' placeholder='state'/>
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='zip code'/>
          <input type='text' placeholder='country'/>
        </div>
        <input type='text' placeholder='phone'/>
      </div>
    </form>
   
  )
}

export default Placeorder
