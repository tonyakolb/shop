import React from 'react';
import Categories from "../../components/Categories/Categories";
import "../CatalogCategories/CatalogCategories.css";
import "./Catalog.css";
import Input from "../../components/Input/Input";
import SearchIcon from "../../assets/images/search-icon.svg";



import { Link } from "react-router-dom";


const Catalog = () => {
    return (
        <>
            <div className="catalog">
                <div className="catalog-categories-info">
                    <div className="catalog-categories-caption">
                        <p>Каталог</p>
                        <div className="search">
                            <img src={SearchIcon} alt="search-icon" />
                        
                        <Input
                            type="text"
                            placeholder="Поиск по товарам, категориям, артикулу"
                            className="catalog-search"
                        /></div>
                    </div>
                    <Categories />

                    <div className="catalog-categories-caption">
                        <p>Все товары</p>
                        <div className='filter-catalog'>
                            <button className="filter">Фильтр</button>
                            <div id="myDropdown" className="dropdown-content">
                                <a href="/">Цена по возрастанию</a>
                                <a href="/">Цена по убыванию</a>
                                <a href="/">В наличии</a>
                                <a href="/">Уцененные</a>
                                <a href="/">Акционные товары</a>
                            </div>
                        </div>
                    </div>
                </div>


                    

            </div>
        </>
    );
};

export default Catalog;
