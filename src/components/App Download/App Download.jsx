import React from 'react'
import { assets } from '../../assets/assets'
import './App Download.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p> For better Experience Download<br/>tomato app</p>
        <div className='app-download-platforms'>
            <img src={assets.play_store} alt=""/>
            <img src={assets.app_store} alt=""/>
        </div>
      
    </div>
  )
}

export default AppDownload