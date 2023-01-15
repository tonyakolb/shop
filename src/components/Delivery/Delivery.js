import React from "react";
import { useNavigate } from "react-router";

import Image from "../Image/Image";
import Courier from "../../assets/images/Delivery.png";
import Cross from "../../assets/images/Cross.svg";
import Home from "../../assets/images/HomeDelivery.svg";
import DeliveryCar from "../../assets/images/FastDelivery.svg";
import PostBox from "../../assets/images/IconBox.svg";

import "./Delivery.css";

const Delivery = () => {
  const navigate = useNavigate();

  const close = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="delivery">
        <div className="delivery-caption">
          <p> Доставка </p>
          <Image src={Cross} alt="close" onClick={close} />
        </div>
        <div className="delivery-ways">
          <div>
            <div className="delivery-way">
              <div className="way-caption">
                <img src={Home} alt="pickup" />
                Самовывоз из магазина
              </div>
              <p>
                Вы можете забрать заказ самостоятельно в нашем магазине по
                адресу: г.Минск, ул.Кульман, 5Б. Павильон 195.
              </p>
              <p>Срок хранения заказа в магазине 7 дней.</p>
            </div>
            <div className="delivery-way">
              <div className="way-caption">
                <img src={DeliveryCar} alt="courier" />
                Курьер
              </div>
              <ul>
                <li>
                  Курьерская доставка осуществляется по городу Минску (до 2
                  МКАД)
                </li>
                <li>
                  срок доставки 1-3 рабочих дня после подтверждения заказа;
                </li>
                <li>стоимость доставки - 5,00 руб в пределах МКАД</li>
                <li>стоимость доставки - 15,00 руб до второй МКАД</li>
              </ul>
            </div>
          </div>
          <div className="delivery-img">
            <img src={Courier} alt="delivery" />
          </div>
        </div>

        <div className="delivery-post">
          <div className="delivery-way">
            <div className="way-caption">
              <img src={PostBox} alt="post" />
              Белпочта
            </div>
            <ul>
              <li>Сроки поставки: 2-4 дня с момента отправки посылки</li>
              <li>
                Оплата за товар производится при получении посылки в Вашем
                отделении почты.
              </li>
              <li>
                Стоимость доставки оплачивает покупатель согласно тарифам РУП
                &laquo;Белпочта&raquo;.{" "}
              </li>
              <li>
                Оплата за товар производится при получении посылки в Вашем
                отделении почты.
              </li>
              <li>
                Ознакомиться с тарифами можно по ссылке{" "}
                <a href="https://belpost.by/"> https://belpost.by/ </a>{" "}
              </li>
              <li>
                Ответственность за сроки доставки товаров и сохранность
                БЕЛПОЧТОЙ интернет-магазин не несет.
              </li>
            </ul>
          </div>
          <div className="delivery-way">
            <div className="way-caption">
              <img src={PostBox} alt="post" />
              Европочта
            </div>
            <ul>
              <li>Сроки поставки: 1-3 дня с момента отправки посылки</li>
              <li>
                Отделения &laquo;Европочта&raquo; работают 7 дней в неделю
              </li>
              <li>
                Время работы отделений с 9:00 до 21:00 (может меняться в
                зависимости от населенного пункта)
              </li>
              <li>
                Актуальные адреса и график работы по ссылке{" "}
                <a href="https://evropochta.by/about/offices/" target="_blank">
                  {" "}
                  https://evropochta.by/about/offices/{" "}
                </a>{" "}
              </li>
              <li>
                Ознакомиться с тарифами можно по ссылке{" "}
                <a
                  href="https://evropochta.by/services/tariffs_ur/"
                  target="_blank"
                >
                  https://evropochta.by/services/tariffs_ur/{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
