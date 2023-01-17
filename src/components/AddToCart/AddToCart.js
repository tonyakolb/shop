import React from "react";
import { Link } from "react-router-dom";

import Cross from "../../assets/images/Cross.svg";

import "./AddToCart.css";
import Image from "../Image/Image";
import {useNavigate} from "react-router";


const AddToCart = ({ src, name, className,id,onClick }) => {

  return (
    <div className={className}>
      <div className="add-to-cart">
        <div className="add-to-cart-close">
            <Image src={Cross} alt="close" id={id} onClick={onClick}/>
        </div>
        <div className="add-to-cart-caption">Товар добавлен в корзину</div>
        <div className="add-to-item-img">
          <img src={src} alt="photo of product" />
        </div>
        <div className="add-to-item-name">{name}</div>
        <div className="buttons">
          <Link to="/Каталог/Корзина">
            <button className="next-page">Перейти в корзину</button>
          </Link>
          <Link to="/Каталог/">
            <button className="next-page">Продолжить покупки</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
