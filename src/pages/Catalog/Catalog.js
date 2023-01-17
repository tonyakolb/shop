import React from "react";
import { useNavigate } from "react-router";

import Categories from "../../components/Categories/Categories";
import Input from "../../components/Input/Input";
import Filter from "../../components/Filter/Filter";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import AllProducts from "../../components/AllProducts/AllProducts";
import Image from "../../components/Image/Image";
import SearchIcon from "../../assets/images/search-icon.svg";
import Cross from "../../assets/images/Cross.svg";

import "./Catalog.css";

const Catalog = () => {
  const navigate = useNavigate();
  const close = () => {
    navigate("/");
  };

  return (
    <>
      <div className="catalog">
        <div className="catalog-close">
          <Image src={Cross} alt="close" onClick={close} />
        </div>
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
          <div className="filter">
            <TitleBlock
              titleBlock="Все товары"
              titleBlockLast="Фильтр"
              classNameBlock="classNameBlock"
              classNameBlockLast="classNameBlockLast"
            />
            <Filter />
          </div>
          <AllProducts />
        </div>
      </div>
    </>
  );
};

export default Catalog;
