import React from "react";
import FirstImage from "../../assets/images/advantage-first.jpg";
import SecondImage from "../../assets/images/advantage-second.jpg";
import ThirdImage from "../../assets/images/advantage-third.jpg";
import ForthImage from "../../assets/images/advantage-forth.jpg";
import FifthImage from "../../assets/images/advantage-fifth.jpg";

const Advantages = () => {
  return (
    <div>
      <div>
        <img src={FirstImage} alt="sales" />
        <p>Постоянные скидки на наши товары</p>
      </div>
      <div>
        <img src={SecondImage} alt="delivery" />
        <p>Доставка по Минску и почтовыми отделениями по всей Беларуси</p>
      </div>
      <div>
        <img src={ThirdImage} alt="price" />
        <p>Наши цены вас приятно удивят</p>
      </div>
      <div>
        <img src={ForthImage} alt="plumbing" />
        <p>Специализируемся только на лучшей сантехники из Китая</p>
      </div>
      <div>
        <img src={FifthImage} alt="location" />
        <p>Удобное расположение нашего магазина</p>
      </div>
    </div>
  );
};

export default Advantages;
