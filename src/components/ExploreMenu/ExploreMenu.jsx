import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'> Explore Our Menu
Discover a world of flavors with our diverse and delicious menu. Whether you're craving a hearty breakfast, a light lunch, or a gourmet dinner, we have something to satisfy every palate. From classic comfort foods to innovative culinary creations, our dishes are made with the freshest ingredients and crafted with care. Browse through our categories and find your new favorite meal today. Dive into our mouthwatering appetizers, savory entrees, delectable desserts, and refreshing beverages. Every dish is designed to delight your taste buds and provide an unforgettable dining experience. Explore our menu now and embark on a culinary journey like no other. </p>
      < div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div  onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}}key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""}src={item.menu_image} alt=""/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
