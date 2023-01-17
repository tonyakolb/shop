import React, { ReactElement } from "react";
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import Cross from "../../assets/images/Cross.svg";

import "./AddToCart.css";

const AddToCart = ({
    visible = false,
    name,
    src,
    onClose,
}) => {

    // создаем обработчик нажатия клавиши Esc
    const onKeydown = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    if (!visible) return null;

  return (
    <div className="back">

      <div className="add-to-cart">
        <div className="add-to-cart-close">
                  <img onClick={onClose} src={Cross} alt="close" />
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
