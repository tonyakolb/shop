import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "../Image/Image";
import BagAction from "../../redux/actions/bagAction";
import CountAction from "../../redux/actions/countBagAction";

import Cross from "../../assets/images/Cross.svg";

const BagCard = ({
  bagImg,
  nameCardBag,
  valuePrice,
  deleteProduct,
  bagProducts,
  setTotal,
}) => {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(BagAction.removeBagAction(deleteProduct));
    dispatch(CountAction.decrement());
    setTotal(
      bagProducts.reduce(
        (previousValue, currentItem) => currentItem.price.value,
        0
      )
    );
  };

  return (
    <div className="cart-item">
      <Image src={Cross} alt="close" onClick={removeProduct} />
      <div className="item-image">
        <Image src={bagImg} alt="product image" />
      </div>
      <div className="item-name">
        <p> {nameCardBag} </p>
        <p> Артикул: SQ3790 </p>
      </div>
      <div className="item-price">
        <p className="price-label"> Цена </p>
        <p> {valuePrice} руб </p>
      </div>
      <div className="item-sale">
        <p className="sale-label"> Скидка </p>
        <p> 56,00 руб </p>
      </div>
      <div className="full-price">
        <p className="full-price-label"> Итого </p>
        <p> {valuePrice} </p>
      </div>
      <div className="line" />
    </div>
  );
};

export default BagCard;
