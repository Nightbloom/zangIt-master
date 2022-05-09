import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getSingleProductAction } from '../actions/product-action';

export default function Product({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch()
  const { reduxSingleProduct, isLoading } = useSelector((state) => state.singleProduct)
  useEffect(() => {
    dispatch(getSingleProductAction(match.params.id))
  }, [])
  const addToCart = () => {
    const url = `/cart/${reduxSingleProduct._id}?quantity=${qty}`
    history.push(url)
  }
  return <div className='container' style={{marginTop:"15vw"}}>
    <div className="row">
      <div className="col-lg-6">
        {/* {match.params.id} */}
        <img src={reduxSingleProduct.image} alt="" />
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name: </strong>{reduxSingleProduct.name}
          </li>
          <li className="list-group-item">
            <strong>Price: </strong>{reduxSingleProduct.price}
          </li>
          <li className="list-group-item">
            <strong>Stock: </strong>{reduxSingleProduct.serves}
          </li>
        </ul>
      </div>
      <div className="col-lg-6">
        <ul className="list-group">
          {
            reduxSingleProduct.serves === 0
              ? <div className="alert alert-info mt-3">Out of Stock</div>
              : <div>
                <li className="list-group-item">
                  <strong>Quantity: </strong>
                  <button className="btn btn-dark" disabled={qty === 1 ? true : false} onClick={e => {
                    setQty(pre => pre === 1 ? 1 : pre - 1)
                  }}>-</button>
                  <strong>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
                  <button className="btn btn-dark" disabled={reduxSingleProduct.serves === qty ? true : false} onClick={e => {
                    setQty(pre => pre + 1)
                  }}>+</button>
                </li>
                <li className="list-group-item">
                  <div className="btn btn-dark" onClick={addToCart}>Add to Cart</div>
                </li>
              </div>
          }

        </ul>
      </div>
    </div>
  </div>;
}
