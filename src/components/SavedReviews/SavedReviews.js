import React from "react";

const SavedReviews = ({ valuePrice, productId }) => {
  return (
    <div>
      <div className="product-reviews">
        <div className="review">
          <div className="author-rating">
            <p>{valuePrice}</p>
            <div className="reviewer-rating">
              <span className="active" />
              <span className="active" />
              <span className="active" />
              <span className="active" />
              <span className="active" />
            </div>
          </div>
          <div className="review-text">
            <p>$ {valuePrice}</p> {/*Дата*/}
            <p>$ {productId}</p> {/*Отзыв*/}
            <p>Плюсы: </p>
            <p>Минусы: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedReviews;
