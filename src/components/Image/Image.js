import React from "react";

const Image = ({ src, alt, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
