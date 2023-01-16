import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import Cross from "../../assets/images/Cross.svg";
import Item from "../../assets/images/Item.png";
<<<<<<< HEAD:src/components-not-ready/AddToCart/AddToCart.js
//import Button from '../../components/Button/Button';
=======

import "./AddToCart.css";
>>>>>>> 07678f15d7c7a93ee11b4b694a26331e93e47a7a:src/components/AddToCart/AddToCart.js

const AddToCart = () => {
  const navigate = useNavigate();
  const close = () => {
    navigate("./");
  };

  return (
    <div className="back">
      <div className="add-to-cart">
        <div className="add-to-cart-close">
          <img onClick={close} src={Cross} alt="close" />
        </div>
        <div className="add-to-cart-caption">Товар добавлен в корзину</div>
        <div className="add-to-item-img">
          <img src={Item} alt="photo of product" />
        </div>
        <div className="add-to-item-name">Смеситель для кухни SQ3790</div>
        <div className="buttons">
          <Link to="/Каталог/Корзина">
            <button className="next-page">Перейти в корзину</button>
          </Link>
          <Link to="./">
            <button className="next-page">Продолжить покупки</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
