import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "../components/Image/Image";

import BagAction from "../redux/actions/bagAction";
import CountAction from "../redux/actions/countBagAction";
// import { totalQuantity } from "../redux/actions/TotalQuantity";

import Cross from "../assets/images/Cross.svg";

const BagCard = ({
  bagImg,
  nameCardBag,
  valuePrice,
  id,
  deleteProduct,
  bagProducts,
  setTotal,
  onClickMinus,
  onClickPlus,
  amount,
}) => {
  const dispatch = useDispatch();
  // const [amount, setAmount] = useState(1);
  // const selectValue = (e) => {
  //     onChange(e.target.value);
  // };

  // useEffect(() => {
  //     dispatch(totalQuantity(id, amount));
  // }, [amount]);

  const removeProduct = () => {
    dispatch(BagAction.removeBagAction(deleteProduct));
    dispatch(CountAction.decrement());

    setTotal(
      bagProducts.reduce(
        (previousValue, currentItem) => currentItem.price.value * amount,
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
        <p> Артикул: {id} </p>
      </div>
      <div className="item-price">
        <p className="price-label"> Цена </p>
        <p> {valuePrice} руб </p>
      </div>
      <div className="item-number">
        <p className="number-label"> Количество </p>
        <div className="number">
          <button className="less" onClick={onClickMinus}>
            {" "}
            -{" "}
          </button>
          <p> {amount} </p>
          <button className="more" onClick={onClickPlus}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
      <div className="item-sale">
        <p className="sale-label"> Скидка </p>
        <p> 56,00 руб </p>
      </div>
    </div>
  );
};

export default BagCard;
