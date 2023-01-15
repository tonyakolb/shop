import React from "react";
import { Link } from "react-router-dom";

import Categories from "../Categories/Categories";
import "./CatalogCategories.css";

const CatalogCategories = () => {
  return (
    <div className="catalog-categories">
      <div className="catalog-categories-info">
        <div className="catalog-categories-caption">
          <p>Категории каталога</p>
          <Link to="/Каталог">Перейти в каталог</Link>
        </div>
        <Categories />
      </div>
    </div>
  );
};

export default CatalogCategories;
