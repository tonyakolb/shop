import React from 'react';
import Categories from "../../components/Categories/Categories";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import AllProducts from "../../components/AllProducts/AllProducts";

const Catalog = () => {
    return (
        <>
            <Categories/>
            <TitleBlock
                titleBlock='Все товары'
                titleBlockLast='Фильтр'/>
            <AllProducts/>
        </>
    );
};

export default Catalog;
