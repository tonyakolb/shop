import React, { useEffect, useState } from "react";
import "./ItemPage.scss";
import Header from "../../pages/Header/Header";
import { useParams } from "react-router";

import { http } from "../../assets/constants/api";
import Button from "../../components/Button/Button";

import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions/basketAction";

const initialItem = {
  id: "5cd9a543-e4a3-4aa7-afa7-a78cf716ad9s",
  type: "Dresses",
  name: "SATIN EFFECT TUNIC DRESS",
  price: {
    currency: "USD",
    value: "4990",
  },
  color: {
    name: "Orange",
    hex: "#ED7C00",
  },
  availableSizes: ["XS, S, M, L, XL, XXL"],
  description:
    "SLEEVELESS TUNIC DRESS WITH V-NECKLINE AND WIDE ARM HOLES. FRONT PLEATS. ASYMMETRIC HEM.",
  images: [
    "https://res.cloudinary.com/intellectfox/image/upload/v1619551443/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_1_1.jpg",
    "https://res.cloudinary.com/intellectfox/image/upload/v1619551814/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_1_2.jpg",
  ],
};

const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(initialItem);

  const dispatch = useDispatch();

  const handleAddClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToBasket(item));
  };

  const getElementByID = async (id) => {
    const request = await fetch(http);
    const result = await request.json();
    setItem(result.find((item) => item.id === id));
  };

  useEffect(() => {
    getElementByID(itemId);
  }, []);

  return (
    <>
      <Header isDark={true} />
      <div className="item-page__section">
        <div className="item__container">
          <div className="item_icons">
            <img src={item.images[0]} alt="icon" />
            <img
              className="item_icons-second"
              src={item.images[1]}
              alt="icon"
            />
          </div>
        </div>

        <div className="item_buttons">
          <Button classNames="item_add" onClick={handleAddClick}>
            ADD TO BAG
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
