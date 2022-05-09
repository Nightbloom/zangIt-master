import React from 'react'
import "./Laddu.css"
import Laddoo from "./Laddoo.png"


const Laddu = (props) => {
  return (props.trigger) ? (
    <div className='popup2'>
        <div className='popup-inner2'>
            {props.children}
            <div className='close-btn' onClick={() => props.setTrigger(false)}>X</div>
            <img className='img' src={Laddoo} />
            <div className="description2">
              <div>
                <div>
                <b>Serves</b> - Yields 10-15 Laddus
                </div>
                <div>
                <b>Cooking time</b> - 15 min
                </div>
                <div>
                <b>Shelf life</b> - 7/8 days
                </div>
              </div>
              <div className="price">
                ₹299
              </div>
            </div>
      <div className="productDescription2">
        <div className="para">
        Sesame provides warmth and dates are an excellent source of vital
          nutrients making an important part of winter festivities.
        </div>
      </div>
      <b className="info-title3">Ingredients</b>
      <div className="ingredients2">
        <div className="left2">
          <ul>
          <li>Grinded and Roasted seasame seeds and cardamoms-Powder</li>
          </ul>
        </div>
        <div className='vertical-line4'></div>
        <div className="right2">
          <ul>
            <li>Mashed dates</li>
            <li>Roasted cashews</li>
            <li>Roasted Seasame seeds - 100g</li>
          </ul>
        </div>
      </div> 
        </div> 
    </div>
  ): "";
}

export default Laddu