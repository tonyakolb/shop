import React from "react";
//import Header from "../Header/Header";  <Header />
import MainShare from "../MainShare/MainShare";
import Advantages from "../Advantages/Advantages";
import Bestsellers from "../Bestsellers/Bestsellers";
import CatalogCategories from "../CatalogCategories/CatalogCategories"; 
import Novelties from "../Novelties/Novelties";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import Delivery from "../Delivery/Delivery";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import OrderReady from "../OrderReady/OrderReady";
import Stock from "../Stock/Stock";
import AddToCart from "../AddToCart/AddToCart";




const MainPage = () => {
  return (
    <>
      
      <MainShare />
      <Advantages />
      <Bestsellers />
      <CatalogCategories />
      <Novelties />
      <AboutUs />
      <Footer />
      <Delivery />
      <PaymentMethods />
      <OrderReady />
      <Stock />
      <AddToCart />
    </>
  );
};

export default MainPage;
