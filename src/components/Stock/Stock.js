import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

import Image from "../Image/Image";
import Promotion from "../../components/Promotion/Promotion";
import { apiMain } from "../../assets/constants/requests";
import Cross from "../../assets/images/Cross.svg";

import "./Stock.css";

const Stock = () => {
  const navigate = useNavigate();

  const close = () => {
    navigate("/");
  };
  const [product, setProduct] = useState([]);
  apiMain(setProduct);

  return (
    <div>
      <div className="stock">
        <div className="stock-caption">
          <p>Главная/Акции</p>
          <Image src={Cross} alt="close" onClick={close} />
        </div>
        <div className="promotions">
          {product.map((item) => (
            <Promotion
              urlImg={item.images[0]}
              key={item.id}
              currency="$"
              valuePrice={item.price.value}
              productId={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stock;
