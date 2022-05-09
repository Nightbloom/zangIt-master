import React from 'react'
import "./Payasam.css"
import Payasam from "./Payasam.jpeg"


const Bpayasam = (props) => {
  return (props.trigger) ? (
    <div className='popup2'>
        <div className='popup-inner2'>
            {props.children}
            <div className='close-btn' onClick={() => props.setTrigger(false)}>X</div>
            <img className='img' src={Payasam} />
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
        An exotic take on the humble yet versatile payasam. Usually prepared
          on the auspicious eve of Pongal. This also goes well for simple
          occassions like birthdays, parties and special meals.
        </div>
      </div>
      <b className="info-title3">Ingredients</b>
      <div className="ingredients2">
        <div className="left">
          <ul>
            <li>Black Rice</li>
            <li>Tetra Pack Milk - 250ml</li>
            <li>Coconut Milk Powder</li>
          </ul>
        </div>
        <div className='vertical-line3'></div>
        <div className="right">
          <ul>
            <li>Jaggery</li>
            <li>Green Cardamom powder</li>
            <li>Assorted nuts</li>
            <li>Ghee</li>
          </ul>
        </div>
      </div> 
        </div> 
    </div>
  ): "";
}

export default Bpayasam