import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BagButton from "../BagButton/BagButton";
import CountAction from "../../redux/actions/countBagAction";
import BagAction from "../../redux/actions/bagAction";

import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart";

const ProductCard = ({
  urlImg,
  valuePrice,
  catalogSearch,
  productId,
  name,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const apiResult = useSelector((state) => state.apiResult.response);

  const addToBag = (e) => {
    e.target.value;
    setDisabled(!disabled);
    dispatch(CountAction.increment());
    const resultAdd = apiResult.filter((item) =>
      Object.values(item).includes(productId)
    );
    dispatch(BagAction.addToBagAction(resultAdd));
  };

  return (
    <div className="product-item">
      <div className="product-img">
        <Link to={`/Каталог/${catalogSearch}`}>
          <img src={urlImg} alt="none" className="product_photo" />
        </Link>
        <div className="presence available">$ {valuePrice}</div>
        <div className="sale">$ {valuePrice}</div>
      </div>
      <div className="product-price">
        <div className="actual-price">$ {valuePrice}</div>
        <div className="old-price">$ {valuePrice}</div>
      </div>
      <div className="product-about">
        <div>
          <div className="item-name">$ {valuePrice}</div>
          <div className="item-number">$ {valuePrice}</div>
          <div className="shop-rate">
            <div>
              {!disabled ? (
                <BagButton
                  className="add-to-basket available"
                  onClick={addToBag}
                />
              ) : (
                <div>
                  <BagButton
                    className="add-to-basket not-available"
                    disabled={true}
                  />
                  <AddToCart src={urlImg} name={name} />
                </div>
              )}
            </div>
            <div className="rating">
              Отзывы
              <div className="rating-reviews">
                <div className="saved-product-rating">
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span />
                </div>
                {/*<div className="reviews-number">($ {valuePrice})</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
