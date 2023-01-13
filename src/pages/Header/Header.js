import React, {useState} from "react";
import { useSelector } from "react-redux";
// import { basketDataLengthSelector } from "../../redux/selectors/basketSelectors";
import Input from "../../components/Input/Input";
// import Logo from "../../components/Header/Logo/Logo";
import FoundItem from '../../components/Header/FoundItem/FoundItem';
import Icon from "../../assets/images/Icon-basket.svg";
// import SearchIcon from "../../assets/images/search-icon.svg";
import "./Header.css";
// import {createSelector} from "reselect";
import Navigate from '../../components/Navigate/Navigate';
import {useNavigate} from "react-router-dom";

const Header = ({searchModal}) => {
    const navigate = useNavigate();

    const navBag = () => {
        navigate('/catalog/bag');
    };

  return (
    // <header className="header">np
    //   <Logo />
    //   {/*<div>*/}
    //   {/*  <div className="search-icon">*/}
    //   {/*    <img src={SearchIcon} alt="search-icon" />*/}
    //   {/*  </div>*/}
    //   {/*  <Input className="header-search"*/}
    //   {/*         placeholder="Поиск"*/}
    //   {/*         value={search}*/}
    //   {/*         onChange={searchChange}*/}
    //   {/*         onFocus={() => setFocused(true)}*/}
    //   {/*         onBlur={() => setTimeout(() => setFocused(false), 100)}*/}
    //   {/*  />*/}
    //   {/*    {focused && (*/}
    //   {/*        <div className="search-section">*/}
    //   {/*            {searchArrayItem.map((item) => (*/}
    //   {/*                <FoundItem*/}
    //   {/*                    image={item.images}*/}
    //   {/*                    id={item.id}*/}
    //   {/*                    name={item.name}*/}
    //   {/*                    key={item.id}*/}
    //   {/*                />*/}
    //   {/*            ))}*/}
    //   {/*        </div>*/}
    //   {/*    )}*/}
    //   {/*</div>*/}
    //     <div>
    //         <form className="form_search" onSubmit={(e) => {search(e)}}>
    //             <div className="search-icon">
    //                 <img src={SearchIcon} alt="search-icon" />
    //             </div>
    //             <Input
    //                 type="text"
    //                 placeholder="Поиск"
    //                 className="header-search"
    //                 // onChange={handleWishChange}
    //                 value={value}
    //             />
    //         </form>
    //     </div>
    //
    //
    //
    //   <a href="/" className="">
    //     Каталог
    //   </a>
    //   <a href="/" className="">
    //     Акции
    //   </a>
    //   <a href="/">Доставка</a>
    //   <a href="/" className="">
    //     Контакты
    //   </a>
    //   <a href="/">
    //     <div className="basket">
    //       <img src={Icon} alt="basket" />
    //       <div className="basket-counter">
    //         <span className="counter">0</span>
    //       </div>
    //     </div>
    //   </a>
    //   <p className="header-phone">+375 (44) 584 20 68</p>
    //   <div className="header-schedule">
    //     <p>Вт-Вс: 10:00 - 20:00</p>
    //     <p>Пн: выходной</p>
    //   </div>


      <>
          <header className='header'>
              <Navigate
                  searchModal={searchModal}
                  navigate_elem="navigate_elem"
                  icon="icon"
                  countBag="countBag"
                  navBag={navBag}
                  />
          </header>
      </>
  );
};

export default Header;
