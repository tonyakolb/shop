import React from "react";
// import { useDispatch } from "react-redux";
// import { addToBasket } from "../../redux/actions/basketAction";
import "./Bestsellers.css";
import AllProducts from "../../components/AllProducts/AllProducts";


const Bestsellers = ({ productId }) => {
  

  return (
    <div className="bestsellers">
      <div className="bestsellers-caption">
        <p>Хиты продаж</p>
        <a href="/">Перейти в каталог</a>
      </div>

      <div className="bestsellers-items">

              <AllProducts />

      </div>
    </div>
  );
};

export default Bestsellers;
