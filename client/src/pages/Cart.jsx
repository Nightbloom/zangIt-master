import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToCartAction, removeFromCartAction } from './../actions/cart-actions';

const Cart = ({ location, match }) => {
    const dispatch = useDispatch()
    const { cartItem } = useSelector(state => state.cart)

    useEffect(() => {                  /*                               ID*/             /*Quantity*/
        location.search.split("=")[1] && dispatch(addToCartAction(match.params.id, location.search.split("=")[1]))
    }, []);
    
    const [item] = cartItem

    return (
        <div className='container' style={{marginTop:"15vw"}}>
        {
            cartItem.length > 0
            ?
            <div className="row">
                {
                    cartItem.map(item => (
                    <div key={item._id} className="col-lg-8">
                    <img src={item.image} alt="" />
                        <h2>{item.name}</h2>
                        <p>Qty: <strong>{item.qty}</strong></p>
                        <p>Price: <strong>{item.price}</strong></p>
                        <button className="btn btn-danger" onClick={e => dispatch(removeFromCartAction(item._id))}>Remove</button>
                        </div>
                    ))
                }

                {/* <div className="row"> */}
                <div className="col-sm-4">
                    <h1>Deleverable Qty : {
                        cartItem.reduce((acc, item) => acc + (+item.qty), 0)
                    }
                    </h1>
                    <h1>Total Payble Amount : {
                        cartItem.reduce((acc, item) => acc + (item.qty * item.price), 0)
                    }
                    </h1>
                </div>
                <div className="mx-4 col-sm-4">
                    <h1>Checkout</h1>
                            <Link to={"/checkout/" + item._id}>
                            <button className="btn btn-success">Checkout</button>
                            </Link>
                
                </div>
                {/* </div> */}
            </div>
            : <h1>Item Not Available</h1>
        }
        </div>
    );
}

export default Cart;
