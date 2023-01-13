import React from 'react';
import MainPage from '../MainPage/MainPage';
import Catalog from '../Catalog/Catalog';
import Bag from '../Bag/Bag';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/Каталог" element={<Catalog />} />
                    <Route path="/Каталог/Корзина" element={<Bag />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
