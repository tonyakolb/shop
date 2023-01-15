import React from "react";
import { useNavigate } from "react-router";

import Image from "../Image/Image";

import Cross from "../../assets/images/Cross.svg";
import SaleImage1 from "../../assets/images/Black-Friday.png";
import "./Stock.css";

const Stock = () => {
  const navigate = useNavigate();

  const close = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="stock">
        <div className="stock-caption">
          <p>Главная/Акции</p>
          <Image src={Cross} alt="close" onClick={close} />
        </div>
        <div className="sales">
          <div className="one-sale">
            <div className="time-status">
              <div className="time">
                Период проведения: 20.10.2022 - 31.10.2022
              </div>
              <div className="status not-finished">Действует</div>
            </div>
            <div className="sale-img">
              <img src={SaleImage1} alt="sale" />
            </div>
            <div className="sale-name">АКЦИЯ: 7 черных пятниц на неделе</div>
            <div className="sale-about">
              Более 50 товаров на скидке от 20 до 50%
            </div>
          </div>

          <div className="one-sale">
            <div className="time-status">
              <div className="time">
                Период проведения: 20.10.2022 - 31.10.2022
              </div>
              <div className="status">Закончилась</div>
            </div>
            <div className="sale-img">
              <img src={SaleImage1} alt="sale" />
            </div>
            <div className="sale-name">АКЦИЯ: 7 черных пятниц на неделе</div>
            <div className="sale-about">
              Более 50 товаров на скидке от 20 до 50%
            </div>
          </div>

          <div className="one-sale">
            <div className="time-status">
              <div className="time">
                Период проведения: 20.10.2022 - 31.10.2022
              </div>
              <div className="status not-finished">Действует</div>
            </div>
            <div className="sale-img">
              <img src={SaleImage1} alt="sale" />
            </div>
            <div className="sale-name">АКЦИЯ: 7 черных пятниц на неделе</div>
            <div className="sale-about">
              Более 50 товаров на скидке от 20 до 50%
            </div>
          </div>

          <div className="one-sale">
            <div className="time-status">
              <div className="time">
                Период проведения: 20.10.2022 - 31.10.2022
              </div>
              <div className="status">Закончилась</div>
            </div>
            <div className="sale-img">
              <img src={SaleImage1} alt="sale" />
            </div>
            <div className="sale-name">АКЦИЯ: 7 черных пятниц на неделе</div>
            <div className="sale-about">
              Более 50 товаров на скидке от 20 до 50%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
