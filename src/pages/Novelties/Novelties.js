import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { apiMain } from "../../assets/constants/requests";
import ArrowIcon from "../../assets/images/arrow-icon.svg";
// import Image from "../../assets/images/main-image.jpg";
// import Button from "../../components/Button/Button";
import ProductCard from "../../components/ProductCard/ProductCard";
import Arrow from "../../components/Arrow/Arrow";
import "./Novelties.css";

const Novelties = () => {
  // const dispatch = useDispatch();

  // const [disabled, setDisabled] = useState(false);
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
    <div className="novelties">
      <div className="novelties-info">
        <div className="novelties-caption">
          <p>Новинки</p>
          <Link to="/Каталог">Перейти в каталог</Link>
        </div>
        <div className="novelties-items">
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
            className="more"
            onClick={arrowMore}
            src={ArrowIcon}
            sliderMax={arrowMax}
            arrayLength={product.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Novelties;
