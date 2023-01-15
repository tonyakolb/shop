import React from "react";
import { useNavigate } from "react-router";
import Image from "../Image/Image";

import Cross from "../../assets/images/Cross.svg";
import "./PaymentMethods.css";

const PaymentMethods = () => {
  const navigate = useNavigate();

  const close = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="payment-methods">
        <div className="payment-methods-caption">
          <p>Главная/Способы оплаты</p>
          <Image src={Cross} alt="close" onClick={close} />
        </div>
        <div className="method">
          <div className="method-name"> Способы оплаты </div>
          <p>
            {" "}
            Вы можете выбрать любую удобную форму оплаты у нас на сайте.
            Независимо от выбранной формы оплаты, расчет производится только в
            белорусских рублях{" "}
          </p>
        </div>

        <div className="method">
          <div className="method-name"> Наличными при получении </div>
          <ul>
            <li>
              Наличными деньгами представителю курьерской службы при доставке
            </li>
            <li>При самовывозе из нашего магазина</li>
          </ul>
        </div>

        <div className="method">
          <div className="method-name"> Банковской картой при получении </div>
          <ul>
            <li>
              Оплата через терминал банковскими картами Visa,
              &laquo;MasterCard&raquo; и &laquo;Белкарт&raquo; при самовывозе
              или доставке курьером в Минске
            </li>
          </ul>
        </div>

        <div className="method">
          <div className="method-name"> Оплата картой онлайн </div>
          <ul>
            <li>
              Вы можете оплатить товар банковской картой онлайн. Для этого, при
              оформлении заказа, необходимо выбрать способ оплаты
              &laquo;банковской картой онлайн&raquo;. После оформления заказа вы
              будете автоматически перенаправлены на сервер системы Webpay, где
              приступите к процессу оплаты.
            </li>
          </ul>
        </div>

        <div className="method">
          <div className="method-name"> Оплата через ЕРИП </div>
          <ul>
            <li>
              Оплата через терминал банковскими картами Visa,
              &laquo;MasterCard&raquo; и &laquo;Белкарт&raquo; при самовывозе
              или доставке курьером в Минске
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
