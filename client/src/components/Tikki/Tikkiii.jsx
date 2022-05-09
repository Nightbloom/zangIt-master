import React from 'react'
import "./Tikki.css"
import Tikki from "./Tikki.png"


const Tikkiii = (props) => {
  return (props.trigger) ? (
    <div className='popup2'>
        <div className='popup-inner2'>
            {props.children}
            <div className='close-btn' onClick={() => props.setTrigger(false)}>X</div>
            <img className='img' src={Tikki} />
            <div className="description2">
              <div>
                <div>
                <b>Serves</b> - 3 (10-15 Tikkis)
                </div>
                <div>
                <b>Cooking time</b> - 30 min
                </div>
                <div>
                <b>Shelf life</b> - 48hrs (in a refrigerator after preparation)
                </div>
              </div>
              <div className="price">
                ₹159
              </div>
            </div>
      <div className="productDescription2">
        <div className="para">
        Inspired by the tingling tastes of the Caribbean, this protien-packed
          starter gives the best of both worlds - Indian and Jamaican - in one
          form
        </div>
      </div>
      <b className="info-title2">Ingredients</b>
      <div className="ingredients2">
        <div className="left">
        <ul>
          <li>Rajma</li>
          <li>Oats Powder</li>
          <li>Green Chilli and curry leaves</li>
          </ul>
        </div>
        <div className='vertical-line2'></div>
        <div className="right">
          <ul>
            <li>Ginger and Garlic paste</li>
            <li>Rice flour and corn flour</li>
            <li>Spice mix</li>
            <li>Oil</li>
          </ul>
        </div>
      </div> 
        </div> 
    </div>
  ): "";
}

export default Tikkiii