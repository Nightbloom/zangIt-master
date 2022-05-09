import React from 'react'
import "./Popup.css"
import caribbean_tikki from "./combo 1.png";


const Combo = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            {props.children}
            <div className='close-btn' onClick={() => props.setTrigger(false)}>X</div>
            <img className='img' src={caribbean_tikki} />
            <div className="description">
              <div>
                <div>
                <b>Cooking time</b> - 30 min
                </div>
                <div>
                <b>Shelf life</b> - 2 days
                </div>
              </div>
              <div className="price">
                ₹456
              </div>
            </div>
      <div className="productDescription">
        <div className="para">
          A classic of the city of Rohtak in Haryana, rewri and gajjak made from
          sugar, jaggery and sesame provide the ultimate comfort of warmth in
          the bleak Northern winters. This is Zang's take on the same
        </div>
      </div>
      <div className="ingredients">
        <div className="left">
          <b className="info-title">Bulgar Sugar Halwa ingredients</b>
          <ul>
            <li>Ghee</li>
            <li>Raisin</li>
            <li>Bulgur</li>
            <li>Sugarcane juice</li>
            <li>Jaggery</li>
            <li>Cardmom powder</li>
          </ul>
        </div>
        <div className='vertical-line'></div>
        <div className="right">
          <b className="info-title">Belgium Nutty Praline Kit ingredients</b>
          <ul>
            <li>Sugar</li>
            <li>Peanut</li>
            <li>Cashew Nut Broken</li>
            <li>Butter Chiplet</li>
            <li>Refined Vegetable Oil</li>
            <li>Water</li>
          </ul>
        </div>
      </div> 
        </div> 
    </div>
  ): "";
}

export default Combo