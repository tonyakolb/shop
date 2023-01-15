import React from "react";
import NavigateElement from "../NavigateElement/NavigateElement";
import Input from "../Input/Input";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../components/Header/Logo/Logo";
import SearchIcon from "../../assets/images/search-icon.svg";
import "./Navigate.css";


// import BasketIcon from "../../assets/images/Icon-basket.svg";
import "../../pages/Header/Header.css";

const Navigate = ({ searchModal, navigate_elem, countBag, navBag }) => {
  // const navigate = useNavigate();

  const count = useSelector((state) => state.counter);

  // const bagPage = () => {
  //   navigate("/catalog/bag");
  // };

  return (
    <div className="header">
      <nav className="header">
        <Logo />
        <div>
          <div className="search-icon">
            <img src={SearchIcon} alt="search-icon" />
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
          navigate_elem={navigate_elem}
        />
        <NavigateElement
          navigate_context="Акции"
          navigate_elem={navigate_elem}
        />
        <NavigateElement
          navigate_context="Доставка"
          navigate_elem={navigate_elem}
        />
        <NavigateElement
          navigate_context="Контакты"
          navigate_elem={navigate_elem}
        />
        <div>
          <NavigateElement
            navigate_context="bag"
            navigate_elem={navigate_elem}
            navPage={navBag}
          />
          <div className={countBag}>({count})</div>
        </div>
      </nav>
    </div>
  );
};

export default Navigate;
