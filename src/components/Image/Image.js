import React from "react";

const Image = ({ src, alt, onClick, className }) => {
  return (
    <div onClick={onClick} className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
