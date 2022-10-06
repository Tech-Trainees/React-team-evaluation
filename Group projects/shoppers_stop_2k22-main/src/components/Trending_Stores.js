import React from "react";
import '../assets/styles/Trending_Stores.css';
import MakeUp from '../assets/images/makeup.png'; 
import The_BestDeals from '../assets/images/The_BestDeals.png'; 

function Trending_Stores() {
  return (
    <div className="MainTrending_storesdiv"> 
        <div className="MainTrending_stores">
        <div className="Trending_stores">
        Trending stores
        </div>
        <div className="MakeUpimg">
           <img src={MakeUp} className='MakeUp' alt='MakeUp Banner'/>
        </div>
        <div className="The_BestDealsimg">
           <img src={The_BestDeals} className='The_BestDeals' alt='BestDeals Banner'/>
        </div>
        </div>
    </div>
  );
}

export default Trending_Stores;
                