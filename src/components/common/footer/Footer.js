import React from "react";
import "../footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-x">
          <div className="logo-1 d-flex ">
            <div>
              <p className="sa fw-medium">J</p>
            </div>
            <div>
              <p className="far fw-bolder">ourney</p>
            </div>
          </div>

          <div className="foot-nav">
            <ul className="d-flex gap-1 gap-sm-3  list-unstyled">
              <div className="foot-links">
                <div className="foot-links1">
                  {" "}
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/destinations">Destinations</Link>
                  </li>
                  <li>
                    <Link to="/places">Places</Link>
                  </li>
                </div>
                <div className="foot-links1">
                  <li>
                    <Link to="packages">Packages</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>

          <div className="socio">
            <a href="" className="px-3 fs-4 text-decoration-none ">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="" className="px-3 fs-4 text-decoration-none ">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="" className="px-3 fs-4 text-decoration-none ">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>

          <div className="copyright">
            <p>Copyright @ 2023 All Rights Reserved 💙</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
