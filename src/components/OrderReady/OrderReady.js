import React from "react";

import OrderDone from "../../assets/images/OrderDone.svg";
import Cross from "../../assets/images/Cross.svg";
import "./OrderReady.css";

const OrderReady = () => {
  return (
    <div className="order-background">
      <div className="order-ready">
        <div className="order-ready-caption">
          <p>
            Главная/Корзина<span>/Оформление заказа</span>
          </p>
          <img src={Cross} alt="close" />
        </div>
        <div className="order-ready-info">
          <img src={OrderDone} alt="your order is done" />
          <h1> Ваш заказ успешно оформлен </h1>
          <p> Номер вашего заказа: 000001 </p>
          <p> Наш менеджер в ближайшее время свяжется с вами. </p>
          <h2> Спасибо, что доверяете нам! </h2>
          <div className="order-pay">
            <button className="pay">Оплатить счет</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReady;
