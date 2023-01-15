import React, { useState } from "react";
import Icon from "../../assets/images/Icon-basket-no-frame.svg";
import "./ProductCard.css";
import CountAction from '../../redux/actions/countBagAction';
import Button from "../../components/Button/Button";

import BagAction from '../../redux/actions/bagAction';
import { useDispatch } from "react-redux";
import apiResult from "../../redux/reducer/apiReducer";
import { Link } from "react-router-dom";

const ProductCard = ({ urlImg, valuePrice, catalogSearch }) => {

    const dispatch = useDispatch();

    const [disabled, setDisabled] = useState(false);

    const addToBag = (e) => {
        e.target.value;
        setDisabled(!disabled);
        dispatch(CountAction.increment());
        const resultAdd = apiResult.filter((item) => Object.values(item).includes(productId));
        dispatch(BagAction.addToBagAction(resultAdd));
    };

  return (
    <div className="product-item">
      <div className="product-img">
        <Link to={`/catalog/${catalogSearch}`}>
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
                      <div className="add-to-basket">
                          {!disabled ? (
                              <Button buttonText="<img src={Icon} />" onClick={addToBag} />
                          ) : (
                              <Button className="not-available" buttonText="ADDED" disabled={true} />
                          )}

                      </div>
            <div className="rating">
              Отзывы
              <div className="rating-reviews">
                <div className="product-rating">
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span className="active" />
                  <span />
                </div>
                <div className="reviews-number">($ {valuePrice})</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
