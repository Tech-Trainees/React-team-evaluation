import React, { useState } from 'react'
import '../assets/styles/category.css'
import Olay from '../assets/images/Olay.png'
import Retinol from '../assets/images/Retinol.png'
import mineral from '../assets/images/mineral.png'
import Mamaearth_1 from '../assets/images/Mamaearth_1.png'
import Aveeno from '../assets/images/Aveeno.png'
import '../assets/styles/Category_media.css'
const Category=()=>{
    const[Category]=useState('CATEGORY IN FOCUS')
    const[shop]=useState('SHOP NOW')
    return(
        <div>
        <div  className='category '></div>
       <h1 className='focus_name '>{Category}</h1>
         <img src={Olay} alt='' className='olayimg '></img>
         <div className='olayimg_background '></div>
         <h1 className='Shop_now '>{shop}</h1>
         <img src={Retinol} alt='' className='Retinol '></img>
         <div className='Retinol_background '></div>
         <h1 className='Shop_now2 '>{shop}</h1>
         <div className='olay_paragrap_background '>
         <h1 className='Olay_name '>OLAY</h1>
         <div className='vartical_line '></div>
         <p className='olay_paragrap '>With beauty solutions for women of<br></br> all ages, Olay reminds you that every<br></br> day is a chance to be the best <br></br>possible version of yourself.</p>
         </div>
         <div className='background_skincare '>
         <h1 className='Skincare '>Skincare</h1>
         <p className='skincare_paragrap '>Pamper your skin a little<br></br> more everyday. Wake up <br></br>with the soft plump skin that<br></br> you have dreamt of</p>
         </div>
         <img src={mineral} alt='' className='mineral '></img>
         <div className='mineral_background '>
         <h1 className='olay_skin'>OLAY SKIN</h1>
         </div>
         <img src={Mamaearth_1} alt='' className='Mamaearth_1 '></img>
         <div className='Mamaearth_background '>
         <h1 className='Mamaearth_name '>MAMAEARTH</h1>
         </div>
         <img src={Aveeno} alt='' className='aveeno_img '></img>
         <div className='aveeno_background '>
         <h1 className='aveeno '>AVEENO</h1>
         </div>
        </div>
    )
}
export default Category