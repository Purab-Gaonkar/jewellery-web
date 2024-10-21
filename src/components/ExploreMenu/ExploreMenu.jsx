import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>
            Explore our Jewellery
        </h1>
        <p className='explore-menu-text'>
Discover a world of elegance and craftsmanship as you explore our exquisite jewellery collection. Each piece is meticulously designed to elevate your style and celebrate life's special moments. From delicate rings that symbolize love and commitment to statement necklaces and bracelets that exude sophistication, our jewellery seamlessly blends timeless artistry with modern innovation. Indulge in luxurious designs crafted with precision and adorned with the finest materials, ensuring both beauty and durability. Whether you're seeking a stunning piece for a special occasion or a subtle accessory for everyday wear, our diverse range offers something for every taste. Explore the perfect combination of elegance, craftsmanship, and timeless beauty in our exceptional jewellery collection.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
