import React from "react";
import {useSelector} from "react-redux";
import Input from "../../components/Input/Input";
import Logo from "../../components/Header/Logo/Logo";
import Icon from "../../assets/images/Icon-basket.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import "./Header.css";
import {createSelector} from "reselect";


const Header = () => {
    const basketDataLengthSelector = (state) => state.basket.data.length;
    const basketLength = useSelector(basketDataLengthSelector);
    // const basketDataLengthSelector = (state) => state.basket.data.length;
    //const basketLength = useSelector(basketDataLengthSelector);


    // const basketLength = useSelector(
    //     createSelector(
    //     (state) => state.basket.data.length
    // ));

  return (
    <header className="header">
      <Logo />
      <div>
        <div className="search-icon">
          <img src={SearchIcon} alt="search-icon" />
        </div>
        <Input className="header-search" placeholder='Поиск'/>
      </div>
      <a href="/" className="">
        Каталог
      </a>
      <a href="/" className="">
        Акции
      </a>
      <a href="/">Доставка</a>
      <a href="/" className="">
        Контакты
      </a>
      <a href="/">
        <div className="basket">
          <img src={Icon} alt="basket" />
          <div className="basket-counter">
            <span className="counter">{basketLength}</span>
          </div>
        </div>
      </a>
      <p className="header-phone">+375 (44) 584 20 68</p>
      <div className="header-schedule">
        <p>Вт-Вс: 10:00 - 20:00</p>
        <p>Пн: выходной</p>
      </div>
    </header>
  );
};

export default Header;
