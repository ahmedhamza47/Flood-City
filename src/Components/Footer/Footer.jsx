import React, { useContext } from "react";
import "./Footer.css";
import { DataContext } from "../context/context";

const Footer = () => {
  const {handleRef} = useContext(DataContext)
  return (
    <div>
      <footer id="footer" className="footers" ref={handleRef}>
        <div className="row  text-center no-gutters  py-3">
          <div className="col-sm-4 footer-description  ">
            <h5>
              About FloodWarn
              <span className="orange" style={{ fontSize: "2rem" }}>
                .
              </span>
            </h5>
            <p>Predict and alert people !!</p>
          </div>
          <div className="col-sm-4 my-3">
            <h5>Connect Us</h5>
            <i className="bi bi-instagram footer-icons"></i>
            <i className="bi bi-facebook footer-icons"></i>
            <i className="bi bi-twitter footer-icons"></i>
            {/* <AiOutlineInstagram className="icon" />

            <SiFacebook className="icon" />
            <FaViber className="icon" />
            <GrTwitter className="icon" /> */}
          </div>
          <div className="col-sm-4 contact mt-3">
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
