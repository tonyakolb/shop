import React from "react";
import Header from "../Header/Header";
import MainShare from "../MainShare/MainShare";
import Advantages from "../Advantages/Advantages";
import Bestsellers from "../Bestsellers/Bestsellers";
import CatalogCategories from "../CatalogCategories/CatalogCategories";
import Novelties from "../Novelties/Novelties";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainShare />
      <Advantages />
      <Bestsellers />
      <CatalogCategories />
      <Novelties />
      <AboutUs />
      <Footer />
    </>
  );
};

export default MainPage;
