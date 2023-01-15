import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import Button from "../../components/Button/Button";
import Arrow from "../../components/Arrow/Arrow";

import { apiMain } from "../../assets/constants/requests";
import ArrowIcon from "../../assets/images/arrow-icon.svg";
// import Image from "../../assets/images/main-image.jpg";
import "./Bestsellers.css";
import ProductCard from "../../components-not-ready/ProductCard/ProductCard";
// import { useDispatch } from "react-redux";
// import { addToBasket } from "../../redux/actions/basketAction";
import "./Bestsellers.css";

const Bestsellers = ({ productId }) => {
  // const dispatch = useDispatch();

  // const [disabled, setDisabled] = useState(false);
  const [product, setProduct] = useState([]);
  const [arrowMin, setArrowMin] = useState(0);
  const [arrowMax, setArrowMax] = useState(4);
  apiMain(setProduct);

  // const addToBag = (e) => {
  //   e.target.value;
  //   setDisabled(!disabled);
  //   dispatch(CountAction.increment());
  //   const resultAdd = apiResult.filter((item) =>
  //     Object.values(item).includes(productId)
  //   );
  //   dispatch(BagAction.addToBagAction(resultAdd));
  // };

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
