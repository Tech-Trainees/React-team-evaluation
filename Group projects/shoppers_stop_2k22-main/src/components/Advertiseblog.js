import React from 'react'
import Adgirl from '../assets/images/advertisegirl.png'
import Beautyprod from '../assets/images/beauty.png'
import Newbadge from '../assets/images/newbadge.png'

export const Advertiseblog = () => {
  return (
    <div className='adv-product-div'>
        <span className='newbadge'>
            <img src={Newbadge} alt='badge'/>
        </span>
        <div className='adv-content'>
            <span className='adv-content-disc'>Flat 10% OFF  |  ONLY FOR TODAY</span>
            <span className='adv-content-brand'>Clarins Toners</span>
            <span className='adv-content-desc'>Vitamin C for dull and oily skin</span>
            <span>
                <input type='button' value='Shop Now' className='adv-content-shopnowbtn' />
            </span>
        </div>
        <span className='adv-productimg'>
            <img src={Beautyprod} alt='beauty products'/>
        </span>
        <span className='adv-girl-img'>
            <img src={Adgirl} alt='girl using beauty products'/>
        </span>
    </div>
  )
}
