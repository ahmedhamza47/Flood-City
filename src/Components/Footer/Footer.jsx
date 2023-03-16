import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row justify-content-center text-center no-gutters ">
          <div className="col-lg-4 description text-left ">
            <h5>
              About FloodWarn
              <span className="orange" style={{ fontSize: "2rem" }}>
                .
              </span>
            </h5>
            <p>Predict and alert people !!</p>
          </div>
          <div className="col-lg-4 my-3">
            <h5>Connect Us</h5>
            <i className="bi bi-instagram footer-icons"></i>
            <i className="bi bi-facebook footer-icons"></i>
            <i className="bi bi-twitter footer-icons"></i>
            {/* <AiOutlineInstagram className="icon" />

            <SiFacebook className="icon" />
            <FaViber className="icon" />
            <GrTwitter className="icon" /> */}
          </div>
          <div className="col-lg-4 contact mt-3">
            <h5>Contact</h5>
            <p>Balaju,Kathmandu</p>
            <p>+977 9861329826</p>
            <p>+977 9849456798</p>
            <p>floodwarn@gmail.com</p>
          </div>
        </div>
      </footer>
      <div className="socket text-dark justify-content-center text-center py-2">
        <p className="blue ">
          <a href="index.html" className="blue">
            &copy; floodcity.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
