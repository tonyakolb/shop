import React,{useState} from "react";
// import { useDispatch } from "react-redux";
// import { addToBasket } from "../../redux/actions/basketAction";
import "./Bestsellers.css";
import Image from "../../assets/images/main-image.jpg";
import Button from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import apiResult from "../../redux/reducer/apiReducer";

import CountAction from '../../redux/actions/countBagAction';
import BagAction from '../../redux/actions/bagAction';


const Bestsellers = ({ productId }) => {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false);

  const addToBag = (e) => {
    e.target.value;
    setDisabled(!disabled);
    dispatch(CountAction.increment());
    const resultAdd = apiResult.filter((item) => Object.values(item).includes(productId));
    dispatch(BagAction.addToBagAction(resultAdd));
  };

  return (
    <div className="bestsellers">
      <div className="bestsellers-caption">
        <p>Хиты продаж</p>
        <a href="/">Перейти в каталог</a>
      </div>

      <div className="bestsellers-items">
        <div className="bestsellers-item">
          <div className="bestseller-img">
            <img src={Image} alt="image" />
            <div className="presence not-available">Нет в наличии</div>
            <div className="sale">-30%</div>
          </div>
          <div className="bestseller-price">
            <div className="actual-price">102,00 руб</div>
            <div className="old-price">158,00 руб</div>
          </div>
          <div className="bestseller-about">
            <div>
              <div className="item-name">Кухня/Смеситель для мойки</div>
              <div className="item-number">Артикул: SQ3787</div>
              <div className="shop-rate">
                {/*<button*/}
                {/*  className="add-to-basket not-available"*/}
                {/*  // onClick={handleAddClick}*/}
                {/*>*/}
                {/*  <img src={Icon} alt="basket" />*/}
                {/*</button>*/}

                <div className="add_to_basket">
                  {!disabled ? (
                      <Button buttonText="ADD" onClick={addToBag} />
                  ) : (
                      <Button className="not-available" buttonText="ADDED" disabled={true} />
                  )}

                </div>

                <div className="rating">
                  Отзывы
                  <div className="rating-reviews">
                    <div className="product-rating">
                      <span className="active" />
                      <span className="active" />
                      <span className="active" />
                      <span className="active" />
                      <span />
                    </div>
                    <div className="reviews-number">(2)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
