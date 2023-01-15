import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Catalog from "../Catalog/Catalog";
import Bag from "../Bag/Bag";
import Delivery from "../../components/Delivery/Delivery";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
