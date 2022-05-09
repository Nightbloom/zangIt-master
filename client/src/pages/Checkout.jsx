import React from 'react'
import { Link } from 'react-router-dom'
import "./Checkout.css"

const Checkout = () => {
  return (
    
    <div className="container">
        <h1>Customer info</h1>
        <form>    
        <div className="details">
            <label  className="form-label">First Name</label>
            <input type="text" className="form-control" />
        </div>
        <div className="details">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" />
        </div>
        <div className="details">
            <label  className="form-label">Phone</label>
            <input type="number" className="form-control" />
        </div>
        <div className="details">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" />
        </div>
        <h1>Where To</h1>
        <div className="details">
            <label  className="form-label">Address</label>
            <input type="text" className="form-control" />
        </div>
        <div className="details">
            <label className="form-label">City</label>
            <input type="text" className="form-control" />
        </div>
        <div className="details">
            <label  className="form-label">State</label>
            <input type="text" className="form-control" />
        </div>
        <div className="details">
            <label  className="form-label">Zip/postal code</label>
            <input type="number" className="form-control" />
        </div>
        <Link to="/payment"><button type="submit" className="btn1">Click to Pay</button></Link>
        </form>
    </div>
    
  )
}

export default Checkout