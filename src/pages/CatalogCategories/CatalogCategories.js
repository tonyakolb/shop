import React from "react";
import { Link } from "react-router-dom";
import KitchenImage from "../../assets/images/kitchen.png";
import BathroomImage from "../../assets/images/bathroom.png";
import ToiletImage from "../../assets/images/toilet.png";
import OtherImage from "../../assets/images/other-image.png";
import "./CatalogCategories.css";


const CatalogCategories = () => {
  return (
    <div className='catalog-categories'>
        <div className='catalog-categories-info'>
              <div className='catalog-categories-caption'>
                  <p>Категории каталога</p>
                  <a href='/'>Перейти в каталог</a>
              </div>
              <div className='categories'>
                  <div className='category'>
            <img src={KitchenImage} alt="kitchen" />
                      <div className='category-name'>Кухни</div>
        </div>
                  <div className='category'>
            <img src={BathroomImage} alt="bathroom" />
                      <div className='category-name'>Ванная комната</div>
        </div>
                  <div className='category'>
            <img src={ToiletImage} alt="toilet" />
                      <div className='category-name'>Туалетная комната</div>
        </div>
                  <div className='category'>
            <img src={OtherImage} alt="other" />
                      <div className='category-name'>Прочее</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CatalogCategories;
