import React from "react";

const MainShare = ({ urlImg, productId }) => {
  return (
      <div className="main-share">
        <div className="main-share-text">
                  <p>$ {productId}</p>
        </div>
        <div className="main-share-img">
                  <img src={urlImg} alt="main-image" />
        </div>
      </div>
  );
};

export default MainShare;
