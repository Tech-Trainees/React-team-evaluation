import React from 'react'
import '../assets/styles/More_offers.css'
import '../assets/styles/More_offers_media.css'
import EliZabeth from '../assets/images/Elizabeth.png'
import Colorbar from '../assets/images/Colorbar.png'
import Arcela from '../assets/images/Arcela.png'
import Mamaearth from '../assets/images/Mamaearth.png'
const More =()=>{
    return(
        <div className='More_offers'>
        <h1 className='More_offers_header'>MORE OFFERS</h1>
        <img src={EliZabeth} alt=''  className='Elizabetha ' ></img>
        <img src={Colorbar} alt=''  className='Colorbar'></img>
        <img src={Arcela} alt=''  className='Arcela'></img>
        <img src={Mamaearth} alt=''  className='Mamaearth'></img>
        <div >
        <span className='border_box1'></span>
        <span className='Elizabeth_background'>
        <h1 className='Elizabeth_Arden'>ELIZABETH ARDEN</h1>
        <p className='Flate'>Flat 60% off</p>
        </span>
        <span className='border_box2'></span>
        <span className='Colorbar_background'>
        <h1 className='Colorbar_name'>COLORBAR</h1>
        <p className='colorbar_Flate'>Flat 60% off</p>
        </span>
        <span className='border_box3'></span>
        <span className='Arcelia_background'>
        <h1 className='Arcelia_name'>ARCELIA</h1>
        <p className='Arcelia_Flate'>Flat 60% off</p>
        </span>
        <span className='border_box4'></span>
        <span className='Earth_background'>
        <h1 className='Mama_earth_name'>MAMAEARTH</h1>
        <p className='Mamaearth_Flate'>Flat 60% off</p>
        </span>
        </div>
        </div>
    )
}
export default More