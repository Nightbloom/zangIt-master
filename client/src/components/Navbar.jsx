import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);

  const handleClick = () => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const linkContainer = document.querySelector(".links-container");
    toggleBtn.classList.toggle("active");
    linkContainer.classList.toggle("show");
  };

  return (
    <div>
      <nav className="navbar1">
        <h1 className="brand">
          <Link to="/" className="h1">
            zang
          </Link>
        </h1>
        <div className="toggle-btn" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="links-container">
          <li
            className="links-item link active"
            style={{ fontSize: "21px", color: "black" }}
          >
            MENU
          </li>
          <li className="links-item">
            <Link to="/" className="link active" style={{ color: "green" }}>
              Home
            </Link>
          </li>
          <li className="links-item">
            <Link to="/products" className="link active" style={{ color: "green" }}>
              Product
            </Link>
          </li>
          <li className="links-item">
            <Link to="/about" className="link " style={{ color: "green" }}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//     <div className="container">
//     <Link className="navbar-brand" to="/"><strong>ZangBox</strong></Link>
//     <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" >
//         <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="collapsibleNavId">
//         <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
//         <li className="nav-item">
//         <Link className="nav-link" to="/cart">
//         <button className="btn btn-light btn-sm">Cart
//             <div className="badge text-dark">
//                 {
//                     cartItem.reduce((acc, item) => acc + (+item.qty), 0)
//                 }
//             </div>
//         </button>
//         </Link>
//         </li>
//         </ul>
//     </div>
//     </div>
// </nav>
