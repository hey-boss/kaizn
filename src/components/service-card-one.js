import React from "react";
import { Link } from "gatsby";

const ServiceCardOne = ({ data }) => {
  const { title, text, iconName} = data;
  return (
    <div className="icon_box_2 text-center">
      <h3>{title}</h3>
      <p className="text-left">{text}</p>
      <div className="iconWrap">
      <img src={iconName}/>
      </div>
    </div>
  );
};

export default ServiceCardOne;
