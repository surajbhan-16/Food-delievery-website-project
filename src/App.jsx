import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { useState } from 'react'

const App = () => {
  const [showLogin,setShowLogin]=useState("false")
  return (
    <>
    {showLogin?<LoginPopup setshowLogin={setShowLogin}/>:<></>}

    <div className='app'>
     <Navbar setShowLogin={setShowLogin}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/order' element={<Placeorder/>}/>
     </Routes>
     <Footer/>
    </div>
    </>
  )
}

export default App
