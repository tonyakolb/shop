import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalWeb from "../ModalWeb/ModalWeb";
import Header from "../Header/Header";
import MainShare from "../../components/MainShare/MainShare";
import Advantages from "../../components/Advantages/Advantages";
import CatalogCategories from "../../components/CatalogCategories/CatalogCategories";
import Bestsellers from "../Bestsellers/Bestsellers";
import Novelties from "../../pages/Novelties/Novelties";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";

// import Card from "../../components-not-ready/Card/Card";
// import OrderReady from "../OrderReady/OrderReady";
// import AddToCart from "../AddToCart/AddToCart";

const MainPage = () => {
  const [searchModalWeb, setSearchModal] = useState(false);
  const [search, setSearch] = useState([]);
  const [value, setValue] = useState("");
  const apiResult = useSelector((state) => state.apiResult.response);

  const searchModal = (e) => {
    e.target.value;
    setSearchModal(!searchModalWeb);
  };
  const handleWishChange = (value) => {
    setValue(value);
  };

  const showResult = (e) => {
    e.preventDefault();
    const resultSearch = apiResult.filter((item) =>
      Object.values(item)
        .toString()
        .toLowerCase()
        .trim()
        .includes(value.toLowerCase())
    );
    setSearch(resultSearch);
  };

  return (
    <>
      {searchModalWeb ? (
        <ModalWeb
          searchModalClose={searchModal}
          onChange={handleWishChange}
          search={showResult}
          product={search}
          valueInput={value}
        />
      ) : (
        <Header searchModal={searchModal} />
      )}


      <MainShare />
      <Advantages />
      <Bestsellers />
      <CatalogCategories />
      <Novelties />
      <AboutUs />
      <Footer />
      {/*<OrderReady />*/}
      {/*<AddToCart />*/}
      {/*  <Card/>*/}

    </>
  );
};

export default MainPage;
