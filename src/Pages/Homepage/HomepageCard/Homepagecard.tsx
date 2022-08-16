/** @format */

import React from "react";
import "./HomepageCard.css";

const Homepagecard = () => {
  return (
    <div>
      <div className='homepage-card-container'>
        <div className='navbar-div-first'>
          <img
            src='https://i.pinimg.com/736x/7e/a1/c4/7ea1c4d26d656c955e278ec617557c06.jpg'
            alt=''
            className='img-container'
          />
          <button className='quiz-button'>Play Now</button>
        </div>

        <div className='navbar-div-first'>
          <img
            src='https://www.uphe.com/sites/default/files/styles/scale__344w_/public/SuitsSeasonSeven_PosterArt.png'
            alt=''
            className='img-container'
          />
          <button className='quiz-button'>Play Now</button>
        </div>
      </div>
    </div>
  );
};

export default Homepagecard;
