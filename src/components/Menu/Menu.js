import React from "react";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";

import Image from "../Image/Image";
import NavigateElement from "../../components/NavigateElement/NavigateElement";
import Cross from "../../assets/images/White-Cross.svg";
import Inst from "../../assets/images/Menu-Instagram.svg";
import Logotype from "../../assets/images/Logo.svg";

import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();

  const close = () => {
    navigate("/");
  };

  return (
    <div className="menu-container">
      <div className="menu">
        <div className="close-menu">
          <Image src={Cross} alt="close" onClick={close} />
        </div>
        <Image src={Logotype} alt="logotype" className="logotype" />
        <NavigateElement
          navigate_context="Каталог"
          navigate_elem="menu_elem"
          to="Каталог"
        />
        <NavigateElement
          navigate_context="Акции"
          navigate_elem="menu_elem"
          to="/Акции"
        />
        <NavigateElement
          navigate_context="Доставка"
          navigate_elem="menu_elem"
          to="/Доставка"
        />

        <NavigateElement
          navigate_context="Способы оплаты"
          navigate_elem="menu_elem"
          to="/Оплата"
        />
        <HashLink to="/#bookmark-contacts" className="menu_elem">
          Контакты
        </HashLink>
        <HashLink to="/#bookmark-about" className="menu_elem">
          О нас
        </HashLink>
        <div className="instagram">
          <Image src={Inst} alt="instagram" />
          <p>
            Подписывайтесь на наш Instagram
            <a href="https://www.instagram.com/santexnika.by/" target="_blank">
              {" "}
              @santexnika.by{" "}
            </a>
            и первыми узнавайте обо всех скидках и новинках нашего магазина
            cантехники SOQO.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
