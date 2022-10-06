import React from "react";
import '../assets/styles/Build_your_beauty_profile.css';
import unsplash from '../assets/images/unsplash.png';

function Build_Your_Beauty_Profile() {
  return (
        <div className="Baseunsplashimg">
        <div className="unsplashimg">
            <img src={unsplash} alt='Beauty Profile Banner' className="unsplash" />
        </div>
        
        <div className="Profile_Title">Build Your Beauty Profile</div>
        <div className="Profile_Title_Caption">Tell us about your skin and hair in detail and we’ll curate products specially suited for your type.</div>
    </div>
  );
}

export default Build_Your_Beauty_Profile;
                