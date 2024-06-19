import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
     <Navbar/> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/order' element={<Placeorder/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
