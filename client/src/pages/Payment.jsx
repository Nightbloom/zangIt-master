import axios from "axios";
import React, { useEffect, useState } from "react";

function Payment() {
  const total = localStorage.getItem("total");
  // const url = "http://localhost:5000";
  // const url = window.location.host;
  const url =  "https://zang-demo.herokuapp.com";

  const [pay, setPay] = useState({
    name: "Zang It",
    
    price: total,
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_awSOd88V7EAs3V",
      amount: data.amount,
      currency: data.currency,
      name: pay.name,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = url + "/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = url + "/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: pay.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App" style={{ marginBottom: "10vw" }}>
      <div className="pay_container" style={{ marginTop: "20vw" }}>
        <p className="pay_name">{pay.name}</p>
        <p className="price">
          Price : <span>&#x20B9; {pay.price}</span>
        </p>
        <button onClick={handlePayment} className="btn">
          Pay
        </button>
      </div>
    </div>
  );
}

export default Payment;

