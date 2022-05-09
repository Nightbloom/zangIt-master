import React from 'react'
import "./Nutty.css"
import pNutty from "./pNutty.png"


const Nutty = (props) => {
  return (props.trigger) ? (
    <div className='popup1'>
        <div className='popup-inner1'>
            {props.children}
            <div className='close-btn' onClick={() => props.setTrigger(false)}>X</div>
            <img className='img' src={pNutty} />
            <div className="description1">
              <div>
                <div>
                <b>Serves</b> - 2
                </div>
                <div>
                <b>Cooking time</b> - 30 min
                </div>
                <div>
                <b>Shelf life</b> - 5 days (in a cool, dry place in an airtight
          container after preparation)
                </div>
              </div>
              <div className="price">
                ₹199
              </div>
            </div>
      <div className="productDescription1">
        <div className="para">
          A classic of the city of Rohtak in Haryana, rewri and gajjak made from
          sugar, jaggery and sesame provide the ultimate comfort of warmth in
          the bleak Northern winters. This is Zang's take on the same
        </div>
      </div>
      <b className="info-title1">Ingredients</b>
      <div className="ingredients1">
        <div className="left">
        <ul>
            <li>Sugar</li>
            <li>Peanut</li>
            <li>Cashew Nut Broken</li>
          </ul>
        </div>
        <div className='vertical-line1'></div>
        <div className="right">
          <ul>
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

export default Nutty