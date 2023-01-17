import React from "react";
import "./Review.css";
import Cross from "../../assets/images/Cross.svg";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router";

import Image from "../../components/Image/Image";

const Review = () => {

    const navigate = useNavigate();

    const close = () => {
        navigate("/");
    };


  return (
    <div>
      <div className="make-review">
        <div className="review-close">

          <Image src={Cross} alt="close" onClick={close}/>
        </div>
        <form action="/">
          <div className="review-form">
            <label className="required">Имя</label>
            <Input className="review-info" required />

            <label className="required">Контактный телефон</label>
            <Input
              className="review-info"
              required
              placeholder="+375 (00) 000-00-00"
            />

            <label>Электронная почта</label>
            <Input className="review-info" type="email" />

            <label className="required">Отзыв</label>
            <textarea className="review-text" id="text-review" required />

            <label>Плюсы</label>
            <Input className="review-info" type="text" />

            <label>Минусы</label>
            <Input className="review-info" type="text" />
            <div className="stars-rating">
              <label className="required">Оценка</label>
              <div className="your-rating">
                <Input
                  type="radio"
                  id="star-5"
                  name="rating"
                  value="5"
                  required
                />
                <label htmlFor="star-5" title="Оценка «5»"></label>
                <Input type="radio" id="star-4" name="rating" value="4" />
                <label htmlFor="star-4" title="Оценка «4»"></label>
                <Input type="radio" id="star-3" name="rating" value="3" />
                <label htmlFor="star-3" title="Оценка «3»"></label>
                <Input type="radio" id="star-2" name="rating" value="2" />
                <label htmlFor="star-2" title="Оценка «2»"></label>
                <Input type="radio" id="star-1" name="rating" value="1" />
                <label htmlFor="star-1" title="Оценка «1»"></label>
              </div>
            </div>
            <div className="send-review">
              <Input
                className="review-button"
                type="submit"
                value="Отправить"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
