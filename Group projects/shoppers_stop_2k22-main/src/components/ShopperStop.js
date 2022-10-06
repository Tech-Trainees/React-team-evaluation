import React from 'react'
import { Advertiseblog } from './Advertiseblog'
import AllproductsSlick from './AllproductsSlick'
import Beauty_Category_Stores from './Beauty_Category_Stores'
import Category from './Category_foucs'
import Exclusivess from './Exclusive_at_ss'
import Fragrance_Store from './fragrance'
import { Banner } from './MainBanner'
import More from './More_offers'
import BasicTabs from './Tabs'
import Clearance_sale from './Clearance_sale'
import First_citizen_program from './First-citizen-program'
export const ShoppersStop = () => {
  return (
    <div>
        <header className='mainheader'>
            <span className='mainheader-clr'>Bengaluru, 560047</span>
            
                <span className='mainheadercontentgta'>Get The App</span>
                <span className='mainheadercontentgc'>Gift Card</span>
                <span className='mainheadercontentse'>Stores and Events</span>
                <span className='mainheadercontenth'>Help</span>
    
        </header>
        <BasicTabs />
        <Banner />
        <AllproductsSlick />
        <Advertiseblog />

        <Beauty_Category_Stores/>

        <Fragrance_Store />

        <Exclusivess />
        <More/>
        <Category/>
        <Clearance_sale />
        <First_citizen_program/>
    </div>
        
  )
}

