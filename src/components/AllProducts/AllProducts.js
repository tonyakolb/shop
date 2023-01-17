import React from "react";
import { useState } from "react";
import { apiMain } from "../../assets/constants/requests";

import ProductCard from "../ProductCard/ProductCard";
import "./AllProducts.css";

const AllProducts = () => {
  const [product, setProduct] = useState([]);
  apiMain(setProduct);

  return (
    <>
      <div className="all-items">
        <div className="products_items">
          {product.map((item) => (
            <ProductCard
              urlImg={item.images[0]}
              key={item.id}
              valuePrice={item.price.value}
              catalogSearch={item.id}
              productId={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
