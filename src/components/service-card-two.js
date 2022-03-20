import React from "react";
import { Link } from "gatsby";

const ServiceCardTwo = ({ data }) => {
  const { url, iconName, title } = data;
  return (
    <Link className="icon_box_1 text-center" to={url}>
      <div className="flipper">
        <div className="front">
          <img src={iconName} alt="" />
          <h3>{title}</h3>
        </div>
        <div className="back">
          <img src={iconName} alt="" />
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCardTwo;
