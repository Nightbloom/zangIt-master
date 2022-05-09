import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#89e657" }}>
        <div>
          <span></span>
        </div>
        <section style={{ marginTop: "10px" }}>
          <div>
            <div
              style={{ textAlign: "center", display: "flex", width: "100%" }}
            >
              <div
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  color: "green",
                  margin: "auto",
                }}
              >
                <h2>Contact</h2>
                <p>
                  <i></i>thezanglife@gmail.com
                </p>
                <p>
                  <i></i> + 91-8248890189
                </p>
              </div>

              <div
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  color: "green",
                  margin: "auto",
                }}
              >
                <p>
                  <Link to="/!" style={{ color: "green" }}>
                    Privacy and Refund policy
                  </Link>
                </p>
                <p>
                  <Link to="/!" style={{ color: "green" }}>
                    Disclamer Policy
                  </Link>
                </p>
                <p>
                  <Link to="/!" style={{ color: "green" }}>
                    Terms and Condition
                  </Link>
                </p>
                <p>
                  <Link to="/!" style={{ color: "green" }}>
                    Click here for quick customer support
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div style={{ paddingBottom: "20px", textAlign: "center" }}>
          © 2022 Copyright:
          <Link to="/TheSciFi.com" className="mx-2">
            ZangBox.com
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
