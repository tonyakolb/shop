import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../components/Input/Input";
import BagCard from "../../components/BagCard/BagCard";

import BagAction from "../../redux/actions/bagAction";
import { sendProduct } from "../../assets/constants/requests";

import Cross from "../../assets/images/Cross.svg";

import "./Bag.css";

const Bag = () => {
  const navigate = useNavigate();
  const close = () => {
    navigate("/");
  };
  const [productSend, setProductSend] = useState("");
  const [valueSelect, setValueSelect] = useState("1");
  const [disabled, setDisabled] = useState(false);
  const bagProducts = useSelector((state) => state.bagReducer.bagProducts);
  const dispatch = useDispatch();
  const apiResult = useSelector((state) => state.apiResult.response);

  const productDetailsFilter = apiResult.filter((item) =>
    Object.values(item).includes(id)
  );
  const { id } = useParams();

  const bagItem = bagProducts.map((item) => item.id);

  const selectChange = (valueSelect) => {
    setValueSelect(valueSelect);
  };

  const [total, setTotal] = useState(
    bagProducts.reduce(
      (previousValue, currentItem) =>
            previousValue + currentItem.price.value * valueSelect - currentItem.price.value,
      0
    )
  );

  useEffect(() => {
    setTotal(
      bagProducts.reduce(
        (previousValue, currentItem) =>
              previousValue + currentItem.price.value * valueSelect - currentItem.price.value,
        0
      )
    );
  }, [valueSelect]);

  const clearBag = (e) => {
    e.preventDefault();
    e.target.value;
    setDisabled(!disabled);
    sendProduct(bagItem, setProductSend);
    dispatch(BagAction.clearToBagAction());
  };

  return (
    <div>
      <div className="shopping-cart">
        <div className="cart-caption">
          <p> Главная/Корзина </p>
          <img src={Cross} onClick={close} alt="close" />
        </div>
        <div className="personal-cart">
          {!!productDetailsFilter && (
            <>
              {productSend ? (
                <div className="products_message">{productSend.message}</div>
              ) : (
                <>
                  {bagProducts.map((item) => (
                    <BagCard
                      key={item.id}
                      bagImg={item.images[0]}
                      nameCardBag={item.name}
                      valuePrice={item.price.value}
                      deleteProduct={item.id}
                      onChange={selectChange}
                      id={item.id}
                      valueSelect={valueSelect}
                      bagProducts={bagProducts}
                      setTotal={setTotal}
                    />
                  ))}
                </>
              )}
            </>
          )}
          <div className="order-price">
            <p className="order-price-label"> Итого: </p>
            <p> {total} руб </p>
          </div>
        </div>
        <div className="order-details">Контактные данные</div>

        <form action="/">
          <div className="order">
            <div className="order-form imp">
              <label className="required">Имя</label>
              <Input className="order-info" required />

              <label className="required">Контактный телефон</label>
              <Input
                className="order-info"
                required
                placeholder="+375 (00) 000-00-00"
              />

              <label>Адрес доставки</label>
              <Input
                className="order-info"
                placeholder="220020, г.Минск, ул.Берута, дом 0, корпус 0 , квартира 0"
              />

              <label>Комментарий к заказу</label>
              <textarea className="order-comment" id="text" />
            </div>

            <div className="delivery-form imp">
              <p>Способы доставки</p>

              <div className="delivery-type">
                <Input
                  className="delivery-info"
                  type="radio"
                  name="delivery"
                  id="delivery-choice1"
                  required
                />
                <label htmlFor="delivery-choice1">
                  <span>Самовывоз</span> из магазина
                </label>
              </div>
              <div className="delivery-type">
                <Input
                  className="delivery-info"
                  type="radio"
                  name="delivery"
                  id="delivery-choice2"
                />
                <label htmlFor="delivery-choice2">
                  <span>Курьером</span> в пределах МКАД <span>(5,00 руб)</span>
                </label>
              </div>
              <div className="delivery-type">
                <Input
                  className="delivery-info"
                  type="radio"
                  name="delivery"
                  id="delivery-choice3"
                />
                <label htmlFor="delivery-choice3">
                  <span>Курьером</span> до 2 МКАД <span>(15,00 руб)</span>
                </label>
              </div>
              <div className="delivery-type">
                <Input
                  className="delivery-info"
                  type="radio"
                  name="delivery"
                  id="delivery-choice4"
                />
                <label htmlFor="delivery-choice4">
                  <span>Белпочта</span> (Стоимость доставки <br /> оплачивает
                  покупатель согласно <br />
                  тарифам РУП "Белпочта")
                </label>
              </div>
              <div className="delivery-type">
                <Input
                  className="delivery-info"
                  type="radio"
                  name="delivery"
                  id="delivery-choice5"
                />
                <label htmlFor="delivery-choice5">
                  <span>Европочта</span> (Стоимость доставки <br /> оплачивает
                  покупатель согласно <br />
                  тарифам "Европочта")
                </label>
              </div>
            </div>

            <div className="your-order">
              <div className="your-order-caption">Ваш заказ:</div>
              <div className="your-order-details">
                <div className="details-label">Товар</div>
                <div className="details-label">Сумма</div>
              </div>
              <div className="your-order-details">
                <div className="details-value">
                  <p>Кран</p>
                  <p>Артикул: SQ3790</p>
                </div>
                <div className="details-number">х1</div>
                <div className="details-price">102,00 руб</div>
              </div>
              <div className="your-order-details">
                <div className="details-label">Доставка </div>
              </div>
              <div className="your-order-details">
                <div className="details-value">
                  По г.Минску в пределах МКАД{" "}
                </div>
                <div className="details-price">5,00 руб</div>
              </div>

              <div className="line" />
              <div className="your-order-price">
                <p> Итого к оплате: </p>
                <p> 107,00 руб </p>
              </div>
            </div>

            <div className="payment-form imp">
              <p>Способы оплаты</p>

              <div className="payment-type">
                <Input
                  className="payment-info"
                  type="radio"
                  name="payment"
                  id="payment-choice1"
                  required
                />
                <label htmlFor="payment-choice1">Наличными при получении</label>
              </div>
              <div className="payment-type">
                <Input
                  className="payment-info"
                  type="radio"
                  name="payment"
                  id="payment-choice2"
                />
                <label htmlFor="payment-choice2">
                  Банковской картой при получении
                </label>
              </div>
              <div className="payment-type">
                <Input
                  className="payment-info"
                  type="radio"
                  name="payment"
                  id="payment-choice3"
                />
                <label htmlFor="payment-choice3">Оплата картой онлайн</label>
              </div>
              <div className="payment-type">
                <Input
                  className="payment-info"
                  type="radio"
                  name="payment"
                  id="payment-choice4"
                />
                <label htmlFor="payment-choice4">Оплата через ЕРИП</label>
              </div>
            </div>

            <div className="agreement-check">
              <Input
                className="agreement-info"
                type="checkbox"
                id="agree"
                required
              />
              <label htmlFor="agree">
                <span>
                  Я прочитал(-а)&nbsp;<a href="/"> Договор публичной оферты </a>
                  &nbsp;и согласен(-на) с условиями
                </span>
              </label>
            </div>
            <div className="order-submit">
              <Input
                className="order-button"
                type="submit"
                value="Подтвердить заказ"
                onClick={clearBag}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bag;
