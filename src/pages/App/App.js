import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import MainPage from "../MainPage/MainPage";
import Catalog from "../Catalog/Catalog";
import Bag from "../Bag/Bag";
import Delivery from "../../components/Delivery/Delivery";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";
import Menu from "../../components/Menu/Menu";

import Stock from "../../components/Stock/Stock";
import ProductPage from '../ProductPage/ProductPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Каталог" element={<Catalog />} />
          <Route path="/Каталог/Корзина" element={<Bag />} />
          <Route path="/Доставка" element={<Delivery />} />
          <Route path="/Оплата" element={<PaymentMethods />} />
          <Route path="/Акции" element={<Stock />} />
          <Route path='/Каталог/:id' element={<ProductPage/>}/>\
                  <Route path="/Меню" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
