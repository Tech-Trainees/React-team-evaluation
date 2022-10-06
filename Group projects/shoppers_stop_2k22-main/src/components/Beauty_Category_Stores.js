import React from "react";
import Build_Your_Beauty_Profile from "./Build_your_beauty_profile";
import Top_Categories_For_You from "./Top_Categories_for_you";
import Trending_Stores from "./Trending_Stores";
import '../assets/styles/Build_your_beauty_profile.css';

function Beauty_Category_Stores() {
  return (
    <div className="Beauty_Category_Storesdiv">
    <Build_Your_Beauty_Profile/>
    <Top_Categories_For_You/>
    <Trending_Stores/>
    </div>
  );
}

export default Beauty_Category_Stores;
                