import React from "react";
import { Link } from "gatsby";

const CallToActionOne = ({ extraClassName, buttonClass }) => {
  return (
    <section className={`commonSection ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-7 col-md-8">
            <h2 className="sec_title">Let's Get Your Project Started!</h2>
          </div>
          <div className="col-lg-4  col-sm-5 col-md-4 text-right">
            <Link to="/contact" className={`common_btn ${buttonClass}`}>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
