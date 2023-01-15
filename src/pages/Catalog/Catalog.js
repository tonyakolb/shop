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
                placeholder="Поиск по товарам, категориям, артикулу"
                className="catalog-search"
              />
            </div>
          </div>
          <Categories />

          <TitleBlock
            titleBlock="Все товары"
            titleBlockLast="Фильтр"
            classNameBlock="classNameBlock"
            classNameBlockLast="classNameBlockLast"
          />

          <AllProducts />
        </div>
      </div>
    </>
  );
};

export default Catalog;
