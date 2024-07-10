import React from 'react'
import './Placeorder.css'
import { StoreContext } from '../../components/context/StoreContext'
import { useContext } from 'react'

const Placeorder = () => {

  const {getTotalCartAmount}=useContext(StoreContext)
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
      <div className="place-order-right">
      <div className='cart-total'>
          <h2>cart totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Delievery fee</p>
              <p>{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          </div>
      </div>
    </form>
   
  )
}

export default Placeorder
