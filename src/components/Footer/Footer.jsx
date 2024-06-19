import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=""/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem officia fuga odio ducimus iure quisquam sed mollitia, consectetur voluptatem tempore maxime unde asperiores cumque, ullam eum sit dicta aut aliquam.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon}alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon}alt=""/>
            </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delievery</li>
                <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>
                        +2678399-33893
                        
                    </li>
                    <li>
                    contact@tomato.com
                    </li>
                </ul>
            </div>
      <hr/>
      <div className='footer-copyright'>
        <p>Copyright 2024 @tomato.com-All rights reserved</p>
      </div>
        </div>
      
    </div>
  )
}

export default Footer
