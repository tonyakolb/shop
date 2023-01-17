import React, { useState } from "react";
import { useNavigate } from "react-router";
import Search from "../../components/Search/Search";

import Categories from "../../components/Categories/Categories";
import Filter from "../../components/Filter/Filter";
import AllProducts from "../../components/AllProducts/AllProducts";
import Image from "../../components/Image/Image";
import Cross from "../../assets/images/Cross.svg";

import "./Catalog.css";

const Catalog = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleFilter = () => setOpen(!open);
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
            <div className="catalog-search">
              <Search />
            </div>
          </div>
          <Categories />
          <div className="classNameBlock">
            Все товары
            <button
                onClick={toggleFilter}
              className="classNameBlockLast"
            >
              Фильтр
            </button>
          </div>
          {open && (
            <div className="filter ">
              <Filter className="dropdown-content" />
            </div>
          )}
          <AllProducts />
        </div>
      </div>
    </>
  );
};

export default Catalog;
