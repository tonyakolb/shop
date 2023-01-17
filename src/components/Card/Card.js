import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bagAction from "../../redux/actions/bagAction";
import SavedReviews from "../SavedReviews/SavedReviews";
import { apiMain } from "../../assets/constants/requests";

import Icon from "../../assets/images/Icon-basket-no-frame.svg";
import Cross from "../../assets/images/Cross.svg";
import "./Card.css";
import countBagAction from "../../redux/actions/countBagAction";
import { useNavigate } from "react-router";

const Card = ({
  detailImages,
  detailImagesSecond,
  productName,
  valuePrice,
  productId,
  currency,
}) => {

    const [product, setProduct] = useState([]);
    apiMain(setProduct);

  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const apiResult = useSelector((state) => state.apiResult.response);
  const navigate = useNavigate();
  const close = () => {
    navigate("/");
  };
  const addToBag = (e) => {
    e.target.value;
    setDisabled(!disabled);
    dispatch(countBagAction.increment());
    const resultAdd = apiResult.filter((item) =>
      Object.values(item).includes(productId)
    );
    dispatch(bagAction.addToBagAction(resultAdd));
  };

  return (
    <div>
      <div className="card">
        <div className="card-caption">
          <p> Каталог/Кухня/Смесители </p>
          <img src={Cross} onClick={close} alt="close" />
        </div>
        <div className="product-card">
          <div className="product-name">{productName}</div>
          <div className="about">
            <div className="first-column">
              <div className="full-product-img">
                <div className="other-img">
                  <img src={detailImagesSecond} alt="product image" />
                  <img src={detailImagesSecond} alt="product image" />
                  <img src={detailImagesSecond} alt="product image" />
                </div>
                <div className="main-img">
                  <img src={detailImages} alt="product image" />
                </div>
                          </div>
                          <div className='full-reviews'>
                              <div className="review-rating">
                                  <p>Отзывы</p>

                                  <div className="product-rating">
                                      <span className="active" />
                                      <span className="active" />
                                      <span className="active" />
                                      <span className="active" />
                                      <span />
                                  </div>
                              </div>
                              {product.map((item) => (
                              <SavedReviews
                                  valuePrice={item.price.value}
                                      productId={item.id} />
                              ))}
                              <div className="add-button">
                                  <button className="add-review">Добавить отзыв</button>
                              </div>
                                  </div>
                              
            </div>
            <div className="sec-column">
              <div className="product-about">
                <div className="product-main-info">
                  <div className="price-info">
                    <div className="product-available">В наличии</div>
                    <div className="product-sale">-30%</div>
                  </div>
                  <div className="price">
                    <div className="price-new">
                      {currency} {valuePrice}
                    </div>
                    <div className="price-old">{valuePrice}</div>
                  </div>
                  <button className="add" onClick={addToBag}>
                    Добавить в корзину
                    <img src={Icon} alt="basket" />
                  </button>
                </div>
                <div className="product-description">
                  <p>Описание</p>
                  Смеситель для кухни с современным дизайном. Прост в установке
                  и использовании. Мытье посуды и кухонной раковины станет
                  приятнее. Смеситель из нержавеющей стали.
                </div>
              </div>
              <div className="product-details">
                <div className="product-details-caption">Характеристика</div>

                <div className="product-detail-group">Общие</div>
                <div className="product-detail-item">
                  <div className="product-detail-label">Исполнение излива</div>
                  <div className="product-detail-value">
                    Выдвижной, Гибкий, Поворотный, с режимом “душ”
                  </div>
                </div>
              </div>
            </div>
                      <div className='mobile-reviews'>
                          <div className="review-rating">
                              <p>Отзывы</p>

                              <div className="product-rating">
                                  <span className="active" />
                                  <span className="active" />
                                  <span className="active" />
                                  <span className="active" />
                                  <span />
                              </div>
                          </div>
                          {product.map((item) => (
                          <SavedReviews
                              valuePrice={item.price.value}
                              productId={item.id} />
                          ))}
                          <div className="add-button">
                              <button className="add-review">Добавить отзыв</button>
                          </div>
                              </div>
                          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
