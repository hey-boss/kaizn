import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget text-center">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
              UTILIZING STATE OF THE ART INTELLIGENT DISINFECTION TECHNOLOGIES, KAIZN CREATES HEALTHY, PRODUCTIVE INTERIOR ENVIRONMENTS.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                <a href="/contact">info@kaiznpureair.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="https://www.instagram.com/kaiznpureair/">
                    <i className="fa fa-instagram"></i>Instagram
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="#">Kaiznpureair.com</a> {" "}
              / Designed by <a href="https://www.heyboss.us/">HEYBOSS</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
