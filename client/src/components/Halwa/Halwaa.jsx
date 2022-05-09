import React from 'react'
import "./Halwa.css"
import Laddoo from "./Halwa.png"


const Halwaa = (props) => {
  return (props.trigger) ? (
    <div className='popup2'>
        <div className='popup-inner2'>
            {props.children}
            <div className='close-btn' onClick={() => props.setTrigger(false)}>X</div>
            <img className='img' src={Laddoo} />
            <div className="description2">
              <div>
                <div>
                <b>Serves</b> - 2
                </div>
                <div>
                <b>Cooking time</b> - 30 mins
                </div>
                <div>
                <b>Shelf life</b> - 48hrs (in a refrigerator after preparation)
                </div>
              </div>
              <div className="price">
                ₹389
              </div>
            </div>
      <div className="productDescription2">
        <div className="para">
        Quintessentially a Persian grain, bulgur is rich in fibre and trace
          minerals thereby making it the perfect solution for salads, mains and
          in this case, dessert.
        </div>
      </div>
      <b className="info-title3">Ingredients</b>
      <div className="ingredients2">
        <div className="left1">
          <ul>
            <li>Ghee</li>
            <li>Raisin</li>
            <li>Bulgur</li>
          </ul>
        </div>
        <div className='vertical-line4'></div>
        <div className="right1">
          <ul>
            <li>Sugarcane juice</li>
            <li>Jaggery</li>
            <li>Cardmom powder</li>
          </ul>
        </div>
      </div> 
        </div> 
    </div>
  ): "";
}

export default Halwaa