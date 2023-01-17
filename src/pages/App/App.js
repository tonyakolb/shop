import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatalogKitchen from "../../pages/CatalogPage/CatalogKitchen";
import CatalogBath from "../../pages/CatalogPage/CatalogBath";
import CatalogToilet from "../../pages/CatalogPage/CatalogToilet";
import CatalogOther from "../../pages/CatalogPage/CatalogOther";
import MainPage from "../MainPage/MainPage";
import Catalog from "../Catalog/Catalog";
import Bag from "../Bag/Bag";
import Delivery from "../../components/Delivery/Delivery";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";
import Menu from "../../components/Menu/Menu";
import Stock from "../../components/Stock/Stock";
import ProductPage from "../ProductPage/ProductPage";
import Review from "../../components-not-ready/Review/Review";
import AddToCart from "../../components/AddToCart/AddToCart";
import OrderReady from "../../components-not-ready/OrderReady/OrderReady";

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
          <Route path="/Каталог/:id" element={<ProductPage />} />\
          <Route path="/Меню" element={<Menu />} />
          <Route path="/Каталог/Кухня" element={<CatalogKitchen />} />
          <Route path="/Каталог/Ванная комната" element={<CatalogBath />} />
                  <Route path="/Оформление заказа" element={<OrderReady />} />
          <Route
            path="/Каталог/Туалетная комната"
            element={<CatalogToilet />}
          />
          <Route
              path="/Добавленный-товар/:id'"
              element={<AddToCart />}
          />
          <Route path="/Каталог/Прочее" element={<CatalogOther />} />
           <Route path="/Отзыв" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
