import React from "react";
import Header from "../Header/Header";
import MainShare from "../MainShare/MainShare";
import Advantages from "../Advantages/Advantages";
import Bestsellers from "../Bestsellers/Bestsellers";
import CatalogCategories from "../CatalogCategories/CatalogCategories";
import Novelties from "../Novelties/Novelties";
import AboutUs from "../AboutUs/AboutUs";
import Contacts from "../Contacts/Contacts";

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
      <Contacts />
    </>
  );
};

export default MainPage;
