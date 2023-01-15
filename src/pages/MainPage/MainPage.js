import React, {useState} from "react";
import {useSelector} from "react-redux";

import Header from "../Header/Header";
// import MainShare from "../MainShare/MainShare";
// import Advantages from "../Advantages/Advantages";
// import Bestsellers from "../Bestsellers/Bestsellers";
import CatalogCategories from "../CatalogCategories/CatalogCategories";

// import Novelties from "../Novelties/Novelties";
// import AboutUs from "../AboutUs/AboutUs";
// import Footer from "../Footer/Footer";
// import Delivery from "../Delivery/Delivery";
// import PaymentMethods from "../PaymentMethods/PaymentMethods";
// import OrderReady from "../OrderReady/OrderReady";
// import Stock from "../Stock/Stock";
// import AddToCart from "../AddToCart/AddToCart";
// import ModalWeb from "../ModalWeb/ModalWeb";

const MainPage = () => {
    // const [searchModalWeb, setSearchModal] = useState(false);
    // const [search, setSearch] = useState([]);
    // const [value, setValue] = useState('');
    // const apiResult = useSelector((state) => state.apiResult.response);
    //
    // const searchModal = (e) => {
    //     e.target.value;
    //     setSearchModal(!searchModalWeb);
    // };
    // const handleWishChange = (value) => {
    //     setValue(value);
    // };
    //
    // const showResult = (e) => {
    //     e.preventDefault();
    //     const resultSearch = apiResult.filter((item) =>
    //         Object.values(item).toString().toLowerCase().trim().includes(value.toLowerCase()),
    //     );
    //     setSearch(resultSearch);
    // };

    return (
    <>
        {/*{searchModalWeb ? (*/}
        {/*    <ModalWeb*/}
        {/*        searchModalClose={searchModal}*/}
        {/*        onChange={handleWishChange}*/}
        {/*        search={showResult}*/}
        {/*        product={search}*/}
        {/*        valueInput={value}*/}
        {/*    />*/}
        {/*) : (*/}
            {/*<Header searchModal={searchModal} /> */}
        //{/*    <MainShare /> )}*/}
        {/*<Advantages />*/}
        {/*<Bestsellers />*/}
            <CatalogCategories />
        {/*<Novelties />*/}
        {/*<AboutUs />*/}
        {/*<Footer />*/}
        {/*<Delivery />*/}
        {/*<PaymentMethods />*/}
        {/*<OrderReady />*/}
        {/*<Stock />*/}
        {/*<AddToCart />*/}

    </>
  );
};

export default MainPage;
