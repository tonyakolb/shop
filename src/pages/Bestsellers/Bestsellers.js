import React, { useState } from "react";
import { Link } from "react-router-dom";

import { apiMain } from "../../assets/constants/requests";
import ArrowIcon from "../../assets/images/arrow-icon.svg";

import ProductCard from "../../components/ProductCard/ProductCard";
import Arrow from "../../components/Arrow/Arrow";

import "./Bestsellers.css";

const Bestsellers = () => {
  const [product, setProduct] = useState([]);
  const [arrowMin, setArrowMin] = useState(0);
  const [arrowMax, setArrowMax] = useState(4);
  apiMain(setProduct);

  const arrowMore = () => {
    setArrowMax(arrowMax + 1);
    setArrowMin(arrowMin + 1);
  };

  const arrowLess = () => {
    setArrowMax(arrowMax - 1);
    setArrowMin(arrowMin - 1);
  };

  return (
    <div className="bestsellers">
      <div className="bestsellers-info">
        <div className="bestsellers-caption">
          <p>Хиты продаж</p>
          <Link to="/Каталог">Перейти в каталог</Link>
        </div>

        <div className="bestsellers-items">
          <Arrow
            onClick={arrowLess}
            className="less"
            src={ArrowIcon}
            sliderMin={arrowMin}
          />
          {product.slice(arrowMin, arrowMax).map((item) => (
            <ProductCard
              urlImg={item.images[0]}
              key={item.id}
              currency="$"
              valuePrice={item.price.value}
              catalogSearch={item.id}
              productId={item.id}
            />
          ))}
          <Arrow
            onClick={arrowMore}
            className="more"
            src={ArrowIcon}
            sliderMax={arrowMax}
            arrayLength={product.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
