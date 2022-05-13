import React from "react";
const PortfolioCard = ({ data }) => {
  const { image, title, categories, url } = data;

  return (
    <div className={`singlefolio`}>
      <img src={image} alt={title} />
      <div className="folioHover">
        <h4>
          <a>{title}</a>
        </h4>
        <a className="cate">
          {categories.map(cat => cat)}
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
