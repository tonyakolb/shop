import React from "react";
import { useNavigate } from "react-router";
import Image from "../../components/Image/Image";
import OtherImage from "../../assets/images/othercatalog.png";
import Cross from "../../assets/images/Cross.svg";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import AllProducts from "../../components/AllProducts/AllProducts";
import Search from "../../components/Search/Search";

import "../../components/CatalogCategories/CatalogCategories.css";
import "./CatalogPage.css";

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
            <p>Каталог/Прочее</p>
            <Image src={Cross} alt="close" onClick={close} />
          </div>
          <div className="page-search">
            <Search />
          </div>
          <div className="page-image">
            <Image src={OtherImage} alt="other" />
          </div>
          <div className="product-type">
            <button className="type">Внешние краны</button>
            <button className="type">Гибкие трубы</button>
            <button className="type">Уцененные</button>
          </div>
          <div className="filter">
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
