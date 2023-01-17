import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ urlImg, valuePrice, catalogSearch,name }) => {
  return (
    <div className="product_offer col-3">
      <Link to={`/catalog/${catalogSearch}`}>
          <div>{name}</div>
        <img src={urlImg} alt="none" className="product_photo" />
      </Link>

      <div className="price">
        <div className="price_sale search_price">$ {valuePrice}</div>
      </div>
    </div>
  );
};

export default SearchCard;
