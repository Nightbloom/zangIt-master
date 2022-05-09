import React from "react";
import "./Home.css";
import mask1 from "../images/pan.png";
import mask2 from "../images/Mask group-1.png";
import mask3 from "../images/Mask group-2.png";
import mask4 from "../images/Mask group.png";
import cook from "../images/cooking 1.png";
import plate from "../images/delicious-rice-chicken-meat-patties-with-garlic-tomato-sauce 1.png";
import foodDelivery from "../images/food-delivery (1) 1.png";
import chilli from "../images/green-chili-peppers 1.png";
import bike from "../images/motorbike 1.png";
import pepper from "../images/top-view-bell-pepper-pepper-sliced-white-horizontal-2 1.png";
import wicon from "../images/wicon.png";
import { Link } from "react-router-dom";
export const Home = () => {
  
  const handleClick = () => {
    window.open("https://wa.me/918248890189?text=Hi%20Zang./" );
  };

  return (
    <div className="conatainer">
      <div className="header">
        <pre className="zangHeading">Zang It</pre>
      </div>
      <div className="maskgroup">
        <div className="maskgroup1">
          <img src={mask1} alt=""/>
        </div>
        <div className="maskgroup2">
          <img src={mask2} alt=""/>
        </div>
        <div className="maskgroup3">
          <img src={mask3} alt=""/>
        </div>
        <div className="maskgroup4">
          <img src={mask4} alt=""/>
        </div>
        <div className="chilli">
          <img src={chilli} alt=""/>
        </div>
        <div className="pepper">
          <img src={pepper} alt=""/>
        </div>
      </div>
      <div className="wicon">
        <Link target="_blank" onClick={handleClick}>
        <img src={wicon} alt=""/>
        </Link>
      </div>
      <div className="welcome">
        <div className="sub_heading">
          Hassle free and exotic cooking in less than 30 minutes
        </div>
        <div className="welcome_content">
          <div className="welcome_Section1">
            <img src={plate} alt=""/>
          </div>
          <div className="welcome_Section2">
            <p className="sub_para">
              We provide you delicious, exotic and healthy food meals with fresh
              ingredients of high quality, curated by the best chefs in the
              industry
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="heading3">How it Works</div>
        <div className="bike">
          <img src={foodDelivery} alt=""/>
        </div>
        <div className="footer_heading">Choose Your Zangbox</div>
        <p className="footer_content">
          We offer a wide range of exotic cuisine keeping in mind both your
          cravings and health.
        </p>
        <div className="bike">
          <img src={bike} alt=""/>
        </div>
        <div className="footer_heading">Get Your Zangbox Delivered</div>
        <p className="footer_content">
          You would be recieving healthy and premium quality ingredients in an
          eco-friendly packaging.
        </p>
        <div className="bike">
          <img src={cook} alt=""/>
        </div>
        <div className="footer_heading">Bring Soul to your Food</div>
        <p className="footer_content_last">
          Follow the tutorials given by us, cook amazing meals to create
          wonderful memories with your faimly.
        </p>
      </div>
      <div>
        <Link to="/products" className="orderBtn">
          Order Now
        </Link>
      </div>
    </div>
  );
};
