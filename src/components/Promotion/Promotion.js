import React from "react";
import apiResult from "../../redux/reducer/apiReducer";
import { useDispatch } from "react-redux";
import "./Promotion.css";

const Promotion = ({ urlImg, valuePrice }) => {
    

    

  return (
    <div className="prom-item">

          <div className="time-status">
              <div className="time">
                  $ {valuePrice}
              </div>
              <div className="status not-finished">$ valuePrice</div>
          </div>
          <div className="sale-img">
              <img src={urlImg} alt="sale" />
          </div>
          <div className="sale-name">$ valuePrice</div>
          <div className="sale-about">
              $ valuePrice
          </div>

    </div>
  );
};

export default Promotion;
