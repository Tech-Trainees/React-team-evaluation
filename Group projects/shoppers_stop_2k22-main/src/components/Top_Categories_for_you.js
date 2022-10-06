import React from "react";
import '../assets/styles/Top_Categories_for_you.css';
import Ellipse18 from '../assets/images/Ellipse18.png'; 
import Ellipse18_1 from '../assets/images/Ellipse18_1.png'; 
import Ellipse18_2 from '../assets/images/Ellipse18_2.png'; 
import Ellipse18_3 from '../assets/images/Ellipse18_3.png'; 
import Ellipse18_4 from '../assets/images/Ellipse18_4.png'; 
import Ellipse351 from '../assets/images/Ellipse351.png'; 

function Top_Categories_For_You() {
  return (
      <div className="Maincategories_for_you">
        <div className="categories_for_you">
            Top Categories For You
        </div>
        <div className="MainEllipse18img">
        <div className="Ellipse18img">
          <div className="Ellipse18imgcircle">
          <img src={Ellipse18} alt='Face Wash.' className='Face_Wash'/>
          </div>
          <div className="Ellipse18img_caption">best sellers</div>
        </div>
        <div className="Ellipse18_1img">
          <div className="Ellipse18imgcircle">
          <img src={Ellipse18_1} alt='fragrance' className='fragrance'/>
          </div>
          <div className="Ellipse18_1img_caption">new arrivals</div>
        </div>
        <div className="Ellipse18_2img">
          <div className="Ellipse18imgcircle">
          <img src={Ellipse18_2} alt='lipstick' className='lipstick'/>
          </div>
          <div className="Ellipse18_2img_caption">makeup</div>
        </div>
        <div className="Ellipse18_3img">
          <div className="Ellipse18imgcircle">
          <img src={Ellipse18_3} alt='body lotion' className='body_lotion'/>
          </div>
          <div className="Ellipse18_3img_caption">skin</div>
        </div>
        <div className="Ellipse18_4img">
          <div className="Ellipse18imgcircle">
          <img src={Ellipse18_4} alt='Hair cream' className='Hair_cream'/>
          </div>
          <div className="Ellipse18_4img_caption">Hair</div>
        </div>
        <div className="Ellipse351img">
          <div className="Ellipse18imgcircle">
          <img src={Ellipse351} alt='Powder' className='Powder'/>
          </div>
          <div className="Ellipse351img_caption">Natural</div>
        </div>
        </div>
        </div>
  );
}

export default Top_Categories_For_You;
                