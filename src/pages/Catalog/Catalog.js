import React from "react";
import Categories from "../../components/Categories/Categories";
import Input from "../../components/Input/Input";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import AllProducts from "../../components/AllProducts/AllProducts";
import SearchIcon from "../../assets/images/search-icon.svg";

import "./Catalog.css";

const Catalog = () => {
  return (
    <>
      <div className="catalog">
        <div className="catalog-categories-info">
          <div className="catalog-categories-caption">
            <p>Каталог</p>
            <div className="search">
              <img src={SearchIcon} alt="search-icon" />

              <Input
                type="text"
                placeholder="Поиск"
                className="catalog-search"
              />
            </div>
          </div>
                  <Categories />
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

export default Catalog;
