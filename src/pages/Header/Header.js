import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import TextBlock from "../../components/TextBlock/TextBlock";
import Image from "../../components/Image/Image";
import NavigateElement from "../../components/NavigateElement/NavigateElement";
import Input from "../../components/Input/Input";

import SearchIcon from "../../assets/images/search-icon.svg";
import BasketIcon from "../../assets/images/Icon-basket.svg";
import Logotype from "../../assets/images/Logo.svg";

import "./Header.css";

const Header = ({ searchModal }) => {
  const count = useSelector((state) => state.counter);

  return (
    <div className="header">
      <Image src={Logotype} alt="logotype" />
      <div>
        <div className="search-icon">
          <Image src={SearchIcon} alt="search-icon" />
        </div>
        <Input
          type="text"
          placeholder="Поиск"
          className="header-search"
          onClick={searchModal}
        />
      </div>
      <NavigateElement
        navigate_context="Каталог"
        navigate_elem="navigate_elem"
        to="Каталог"
      />
      <NavigateElement
        navigate_context="Акции"
        navigate_elem="navigate_elem"
        to="/Акции"
      />
      <NavigateElement
        navigate_context="Доставка"
        navigate_elem="navigate_elem"
        to="/Доставка"
          />
      <a className='navigate_elem' href="#bookmark-contacts"> Контакты </a>{" "}
      <div className="basket">
        <Link to="/Каталог/Корзина">
          <Image src={BasketIcon} alt="basket" />
          <div className="basket-counter">
            <TextBlock className="counter" textValue={count} />
          </div>
        </Link>
      </div>
      <TextBlock textValue="+375 (44) 584 20 68" className="header-phone" />
      <div className="header-schedule">
        <TextBlock textValue="Вт-Вс: 10:00 - 20:00" />
        <TextBlock textValue="Пн: выходной" />
      </div>
    </div>
  );
};

export default Header;
