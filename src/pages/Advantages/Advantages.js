import React from "react";
import FirstImage from "../../assets/images/advantage-first.jpg";
import SecondImage from "../../assets/images/advantage-second.png";
import ThirdImage from "../../assets/images/advantage-third.png";
import ForthImage from "../../assets/images/advantage-forth.png";
import FifthImage from "../../assets/images/advantage-fifth.png";
import "./Advantages.css";

const Advantages = () => {
    return (
        <div className='advantages'>
            <div className='advantage'>
        <img src={FirstImage} alt="sales" />
        <p>Постоянные скидки на наши товары</p>
            </div>
            <div className='advantage'>
        <img src={SecondImage} alt="delivery" />
        <p className='desc-adv'>Доставка по Минску и почтовыми отделениями по всей Беларуси</p>
        <p className='mobile-adv'>Доставка по всей Беларуси</p>
            </div>
            <div className='advantage desc-adv'>
        <img src={ThirdImage} alt="price" />
        <p>Наши цены вас приятно удивят</p>
            </div>
            <div className='advantage'>
        <img src={ForthImage} alt="plumbing" />
        <p className='desc-adv'>Специализируемся только на лучшей сантехники из Китая</p>
        <p className='mobile-adv'>Только лучшая сантехника из Китая</p>
            </div>
            <div className='advantage desc-adv'>
        <img src={FifthImage} alt="location" />
        <p>Удобное расположение нашего магазина</p>
            </div>
    </div>
  );
};

export default Advantages;
