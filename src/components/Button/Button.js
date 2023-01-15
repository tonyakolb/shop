import React from "react";

const Button = ({ className,buttonText, disabled, onClick }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
