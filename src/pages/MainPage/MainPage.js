import React from "react";
import Header from "../Header/Header";
import MainShare from "../../components/MainShare/MainShare";
import Advantages from "../../components/Advantages/Advantages";
import CatalogCategories from "../../components/CatalogCategories/CatalogCategories";
import Bestsellers from "../Bestsellers/Bestsellers";
import Novelties from "../../pages/Novelties/Novelties";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";

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
