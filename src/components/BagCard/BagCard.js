import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "../Image/Image";
import BagAction from "../../redux/actions/bagAction";
import CountAction from "../../redux/actions/countBagAction";
import { totalQuantity } from "../../redux/actions/TotalQuantity";

import Cross from "../../assets/images/Cross.svg";

const BagCard = ({
  bagImg,
  nameCardBag,
  valuePrice,
  id,
  deleteProduct,
  onChange,
  valueSelect,
  bagProducts,
  setTotal,
}) => {
  const dispatch = useDispatch();
  const selectValue = (e) => {
    onChange(e.target.value);
  };

  useEffect(() => {
    dispatch(totalQuantity(id, valueSelect));
  }, [valueSelect]);

  const removeProduct = () => {
    dispatch(BagAction.removeBagAction(deleteProduct));
    dispatch(CountAction.decrement());

    setTotal(
      bagProducts.reduce(
        (previousValue, currentItem) => currentItem.price.value * valueSelect,
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
      <div className="items-number">
        <p className="number-label"> Количество </p>
        {/*<div className="number" >*/}
        <select className="number" onChange={selectValue}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        {/*<button className="less" onClick={() => setCount(count - 1)}>*/}
        {/*  {" "}*/}
        {/*  -{" "}*/}
        {/*</button>*/}
        {/*<p> {count} </p>*/}
        {/*<button className="more" onClick={() => setCount(count + 1)}>*/}
        {/*  {" "}*/}
        {/*  +{" "}*/}
        {/*</button>*/}
        {/*</div>*/}
      </div>
      <div className="item-sale">
        <p className="sale-label"> Скидка </p>
        <p> 56,00 руб </p>
      </div>
      {/*<div className="full-price">*/}
      {/*  <p className="full-price-label"> Итого </p>*/}
      {/*  <p> {valueSelect*valuePrice} </p>*/}
      {/*</div>*/}
      <div className="line" />
    </div>
  );
};

export default BagCard;
