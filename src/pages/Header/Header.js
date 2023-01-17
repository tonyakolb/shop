import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import TextBlock from "../../components/TextBlock/TextBlock";
import Image from "../../components/Image/Image";
import NavigateElement from "../../components/NavigateElement/NavigateElement";

import BasketIcon from "../../assets/images/Icon-basket.svg";
import Logotype from "../../assets/images/Logo.svg";
import Menu from "../../assets/images/Icon_Menu.svg";

import "./Header.css";
import Search from "../../components/Search/Search";

const Header = () => {
  const count = useSelector((state) => state.counter);
  const navigate = useNavigate();
  const menu = () => {
    navigate("/Меню");
  };

  return (
    <div className="header">
      <Image src={Menu} alt="menu" className="menu-icon" onClick={menu} />
          <Image src={Logotype} alt="logotype" className="logo" />
          <div className='search-menu'>
              <Search />
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
      <a className="navigate_elem" href="#bookmark-contacts">
        {" "}
        Контакты{" "}
      </a>{" "}
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
