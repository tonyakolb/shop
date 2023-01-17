import React from "react";
import { useNavigate } from "react-router";
import Input from "../../components/Input/Input";
import Image from "../../components/Image/Image";
import SearchIcon from "../../assets/images/search-icon.svg";
import ToiletImage from "../../assets/images/toiletcatalog.png";
import Cross from "../../assets/images/Cross.svg";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import AllProducts from "../../components/AllProducts/AllProducts";
import Search from "../../components/Search/Search";

import "../../components/CatalogCategories/CatalogCategories.css";
import "./CatalogPage.css";
// import { Link } from "react-router-dom";

const CatalogKitchen = () => {

    const navigate = useNavigate();

    const close = () => {
        navigate("/");
    };

  return (
    <>
      <div className="catalog">
        <div className="catalog-categories-info">
          <div className="catalog-caption">
            <p>Каталог/Туалетная комната</p>
            <Image src={Cross} alt="close" onClick={close} />
                  </div>
                  <div className='page-search'>
                      <Search />
                  </div>
          <div className="page-image">
            <Image src={ToiletImage} alt="toilet" />
                  </div>

                  <div className='product-type'>
                      <button className="type">Унитазные бачки</button>
                      <button className="type">Смесители и атрибуты для биде</button>
                      <button className="type">Держатели</button>
                      <button className="type">Ершики</button>
                      <button className="type">Уцененные</button>

                  </div>

                  <div className='filter'>
                  <TitleBlock
                      titleBlock="Все товары"
                      titleBlockLast="Фильтр"
                      classNameBlock="classNameBlock"
                      classNameBlockLast="classNameBlockLast"
                  />
                  <div id="myDropdown" className="dropdown-content">
                      <a href="/">Цена по возрастанию</a>
                      <a href="/">Цена по убыванию</a>
                      <a href="/">В наличии</a>
                      <a href="/">Уцененные</a>
                      <a href="/">Акционные товары</a>
                  </div>
                  </div>

                  <AllProducts />
        </div>
      </div>
    </>
  );
};

export default CatalogKitchen;
