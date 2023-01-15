import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import Button from "../../components/Button/Button";
import Arrow from "../../components/Arrow/Arrow";

import { apiMain } from "../../assets/constants/requests";
import apiResult from "../../redux/reducer/apiReducer";
import CountAction from "../../redux/actions/countBagAction";
import BagAction from "../../redux/actions/bagAction";
import ArrowIcon from "../../assets/images/arrow-icon.svg";
// import Image from "../../assets/images/main-image.jpg";
import "./Bestsellers.css";
import ProductCard from "../../components-not-ready/ProductCard/ProductCard";

const Bestsellers = ({ productId }) => {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false);
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
      <div className="bestsellers-caption">
        <p>Хиты продаж</p>
        <Link to="/Каталог">Перейти в каталог</Link>
      </div>

      <div className="bestsellers-items">
        <Arrow onClick={arrowLess} src={ArrowIcon} sliderMin={arrowMin} />
        {product.slice(arrowMin, arrowMax).map((item) => (
          <ProductCard
            urlImg={item.images[0]}
            key={item.id}
            currency="$"
            valuePrice={item.price.value}
            catalogSearch={item.id}
            productId={item.id}
          />
          //     <div className="bestsellers-item">
          //   <div className="bestseller-img">
          //     <img src={Image} alt="image" />
          //     <div className="presence not-available">Нет в наличии</div>
          //     <div className="sale">-30%</div>
          //   </div>
          //   <div className="bestseller-price">
          //     <div className="actual-price">102,00 руб</div>
          //     <div className="old-price">158,00 руб</div>
          //   </div>
          //   <div className="bestseller-about">
          //     <div>
          //       <div className="item-name">Кухня/Смеситель для мойки</div>
          //       <div className="item-number">Артикул: SQ3787</div>
          //       <div className="shop-rate">
          //
          //         <div className="add_to_basket">
          //           {!disabled ? (
          //             <Button className="add_to_basket" buttonText="ADD" onClick={addToBag} />
          //           ) : (
          //             <Button
          //               className="add_to_basket not-available"
          //               buttonText="ADDED"
          //               disabled={true}
          //             />
          //           )}
          //         </div>
          //
          //         <div className="rating">
          //           Отзывы
          //           <div className="rating-reviews">
          //             <div className="product-rating">
          //               <span className="active" />
          //               <span className="active" />
          //               <span className="active" />
          //               <span className="active" />
          //               <span />
          //             </div>
          //             <div className="reviews-number">(2)</div>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        ))}
        <Arrow
          onClick={arrowMore}
          src={ArrowIcon}
          sliderMax={arrowMax}
          arrayLength={product.length}
        />
      </div>
    </div>
  );
};

export default Bestsellers;
