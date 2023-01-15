import React from 'react';
import Categories from "../../components/Categories/Categories";
import "../CatalogCategories/CatalogCategories.css";
import "./CatalogPage.css";
import Input from "../../components/Input/Input";
import SearchIcon from "../../assets/images/search-icon.svg";
import KitchenImage from "../../assets/images/kitchencatalog.png";
import Cross from "../../assets/images/Cross.svg";




import { Link } from "react-router-dom";


const CatalogKitchen = () => {
    return (
        <>
            <div className="catalog">
                <div className="catalog-categories-info">
                    <div className="catalog-caption">
                        <p>Каталог/Кухня</p>
                        <img src={Cross} alt="close" />
                    </div>
                    <div className="search">
                        <img src={SearchIcon} alt="search-icon" />

                        <Input
                            type="text"
                            placeholder="Поиск по товарам, категориям, артикулу"
                            className="page-search" />
                    </div>
                    <div className='page-image'>
                    <img src={KitchenImage} alt="kitchen" />
                    </div>
                </div>


                    

            </div>
        </>
    );
};

export default CatalogKitchen;
