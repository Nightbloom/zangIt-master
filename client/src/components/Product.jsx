import React, { useState } from 'react'
import { divnk } from 'react-router-dom';
import './Product.css'
import Bulgar from '../images/Halwa.png'
import serves from '../images/Serving.png'
import clock from '../images/time.png'
import Tikki from '../images/Tikki.png'
import Nutty from '../images/pNutty.png'
import Laddu from '../images/Laddoo Pic 2.png'
import Arrow from '../images/expand-button 1.png'
import Combo from '../images/combo 1.png'



export default function Product() {
    const [quantity, setQuantity] = useState(0);
    const [quantity2, setQuantity2] = useState(0);
    const [quantity3, setQuantity3] = useState(0);
    const [quantity4, setQuantity4] = useState(0);
    const [quantity5, setQuantity5] = useState(0);
    const [combo, setCombo] = useState(0);


    const amount = 389
    const amount2 = 159
    const amount3 = 199
    const amount4 = 259
    const amount5 = 299
    const amountCombo = 456
    const a = amount * quantity
    const b = amount2 * quantity2
    const c = amount3 * quantity3
    const d = amount4 * quantity4
    const e = amount5 * quantity5
    const f = amountCombo * combo
    const total = a + b + c + d + e + f

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevCount => prevCount - 1)
        }
    }

    const handleIncrement = () => {
        setQuantity(prevCount => prevCount + 1)
    }
    const handleDecrement2 = () => {
        if (quantity2 > 0) {
            setQuantity2(prevCount => prevCount - 1)
        }
    }

    const handleIncrement2 = () => {
        setQuantity2(prevCount => prevCount + 1)
    }
    const handleDecrement3 = () => {
        if (quantity3 > 0) {
            setQuantity3(prevCount => prevCount - 1)
        }
    }

    const handleIncrement3 = () => {
        setQuantity3(prevCount => prevCount + 1)
    }

    const handleDecrement4 = () => {
        if (quantity4 > 0) {
            setQuantity4(prevCount => prevCount - 1)
        }
    }

    const handleIncrement4 = () => {
        setQuantity4(prevCount => prevCount + 1)
    }

    const handleDecrement5 = () => {
        if (quantity5 > 0) {
            setQuantity5(prevCount => prevCount - 1)
        }
    }

    const handleIncrement5 = () => {
        setQuantity5(prevCount => prevCount + 1)
    }

    const handleDecrementCombo = () => {
        if (combo > 0) {
            setCombo(prevCount => prevCount - 1)
        }
    }

    const handleIncrementCombo = () => {
        setCombo(prevCount => prevCount + 1)
    }




    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color,
                backgroundColor: color,
                height: 2,
                marginTop: 5,
                marginLeft: 15,
                marginRight: 15
            }}
        />
    );





    return (
        <div>
            <div style={{ display: "flex" }}>
                <div >
                    <img src={Bulgar} className='image' alt=""/>
                </div>
                <div >
                    <div className='name' > Bulgar Sugarcane Halwa </div>
                    <div className='servediv'>
                        <img src={serves} className='servesimg' alt=""/>
                        <div className='servetext' > 2 serves</div>


                    </div>
                    <div className='cookdiv'>
                        <img src={clock} className='timeimg' alt=""/>
                        <div className='timetext'  >30 mins</div>
                    </div>
                    <div>
                        <img src={Arrow} className='arrow' alt=""/>
                    </div>


                </div>
                <div>
                    <div className='price'>Rs. 389</div>
                    <div className='quantity'>Quantity</div>
                    <div style={{ display: "flex", marginTop: 2, marginLeft: 15 }}>
                        <button className='decrement' onClick={handleDecrement}>-</button>
                        <span className='number'>{quantity}</span>
                        <button className='increment' onClick={handleIncrement}>+</button>

                    </div>
                </div>


            </div>




            <ColoredLine color={"#D3D3D3"} />

            <div style={{ display: "flex" }}>
                <div >
                    <img src={Tikki} className='image' alt=""/>
                </div>
                <div >
                    <div className='name' > Caribbean Tikki </div>
                    <div className='servediv'>
                        <img src={serves} className='servesimg' alt="" />
                        <div className='servetext' > 2 serves</div>


                    </div>
                    <div className='cookdiv'>
                        <img src={clock} className='timeimg' alt=""/>
                        <div className='timetext'  >30 mins</div>
                    </div>
                    <div>
                        <img src={Arrow} className='arrow' alt=""/>
                    </div>

                </div>
                <div>
                    <div className='price'>Rs. 159</div>
                    <div className='quantity'>Quantity</div>
                    <div style={{ display: "flex", marginTop: 2, marginLeft: 15 }}>
                        <button className='decrement' onClick={handleDecrement2}>-</button>
                        <span className='number'>{quantity2}</span>
                        <button className='increment' onClick={handleIncrement2}>+</button>

                    </div>
                </div>
            </div>
            <ColoredLine color={"#D3D3D3"} />

            <div style={{ display: "flex" }}>
                <div >
                    <img src={Nutty} className='image' alt=""/>
                </div>
                <div >
                    <div className='name' > Belgium Nutty Praline Kit </div>
                    <div className='servediv'>
                        <img src={serves} className='servesimg' alt=""/>
                        <div className='servetext' > 2 serves</div>


                    </div>
                    <div className='cookdiv'>
                        <img src={clock} className='timeimg' alt=""/>
                        <div className='timetext'  >30 mins</div>
                    </div>
                    <div>
                        <img src={Arrow} className='arrow' alt=""/>
                    </div>

                </div>
                <div>
                    <div className='price'>Rs. 199</div>
                    <div className='quantity'>Quantity</div>
                    <div style={{ display: "flex", marginTop: 2, marginLeft: 15 }}>
                        <button className='decrement' onClick={handleDecrement3}>-</button>
                        <span className='number'>{quantity3}</span>
                        <button className='increment' onClick={handleIncrement3}>+</button>

                    </div>
                </div>
            </div>
            <ColoredLine color={"#D3D3D3"} />

            <div style={{ display: "flex" }}>
                <div >
                    <img src={Laddu} className='image' alt=""/>
                </div>
                <div >
                    <div className='name' > Kajjoor Laddu </div>
                    <div className='servediv'>
                        <img src={serves} className='servesimg' alt=""/>
                        <div className='servetext' > 10-15 Laddoos</div>


                    </div>
                    <div className='cookdiv'>
                        <img src={clock} className='timeimg' alt=""/>
                        <div className='timetext'  >15 mins</div>
                    </div>
                    <div>
                        <img src={Arrow} className='arrow' alt=""/>
                    </div>

                </div>
                <div>
                    <div className='price'>Rs. 259</div>
                    <div className='quantity'>Quantity</div>
                    <div style={{ display: "flex", marginTop: 2, marginLeft: 15 }}>
                        <button className='decrement' onClick={handleDecrement4}>-</button>
                        <span className='number'>{quantity4}</span>
                        <button className='increment' onClick={handleIncrement4}>+</button>

                    </div>
                </div>
            </div>
            <ColoredLine color={"#D3D3D3"} />

            <div style={{ display: "flex" }}>
                <div >
                    <img src={Bulgar} className='image' alt=""/>
                </div>
                <div >
                    <div className='name' > Black rice Payasam </div>
                    <div className='servediv'>
                        <img src={serves} className='servesimg' alt=""/>
                        <div className='servetext' > 2 serves</div>


                    </div>
                    <div className='cookdiv'>
                        <img src={clock} className='timeimg' alt=""/>
                        <div className='timetext'  >30 mins</div>
                    </div>
                    <div>
                        <img src={Arrow} className='arrow' alt=""/>
                    </div>

                </div>
                <div>
                    <div className='price'>Rs. 299</div>
                    <div className='quantity'>Quantity</div>
                    <div style={{ display: "flex", marginTop: 2, marginLeft: 15 }}>
                        <button className='decrement' onClick={handleDecrement5}>-</button>
                        <span className='number'>{quantity5}</span>
                        <button className='increment' onClick={handleIncrement5}>+</button>

                    </div>
                </div>
            </div>
            <ColoredLine color={"black"} />
            <div className='combos'>THE COMBOS</div>
            <div style={{ display: "flex" }}>
                <div >
                    <img src={Combo} className='image' alt=""/>
                </div>
                <div >
                    <div className='name' > COMBO 1 </div>
                    <div >
                       <ul style={{fontSize : 12, letterSpacing : 1}}>
                           <li>Bulgar Sugarcane Halwa - Rs.389</li>
                           <li>Belgium Nutty Praline Kit - Rs.199</li>
                       </ul>
                       
                    </div>
                    <div>
                        <img src={Arrow} className='arrow' alt=""/>
                    </div>

                </div>
                <div>
                    <div className='price'>Rs. 456</div>
                    <div className='quantity'>Quantity</div>
                    <div style={{ display: "flex", marginTop: 2, marginLeft: 15 }}>
                        <button className='decrement' onClick={handleDecrementCombo}>-</button>
                        <span className='number'>{combo}</span>
                        <button className='increment' onClick={handleIncrementCombo}>+</button>

                    </div>
                </div>
            </div>
            <div className='input'>
            <input type="text" value="Add a note(Optional)" name = "note"  />
            </div>
            <div>
        <button className="orderBtn">Pay Rs. {total}</button>
      </div>



                
            
        </div>

    )
}
