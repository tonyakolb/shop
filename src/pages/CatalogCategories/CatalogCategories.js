import React from "react";
import {Link} from "react-router-dom";

import "./CatalogCategories.css";
import Categories from "../../components/Categories/Categories";

const CatalogCategories = () => {
  return (
    <div className="catalog-categories">
      <div className="catalog-categories-info">
        <div className="catalog-categories-caption">
          <p>Категории каталога</p>
          <Link to="/Каталог">Перейти в каталог</Link>
        </div>

       <Categories/>
      </div>
    </div>
  );
};

export default CatalogCategories;
