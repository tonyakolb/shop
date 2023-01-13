import React from "react";

const Input = ({
  value,
  className,
  placeholder,
  onChange,
  type,
  onClick,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      onClick={onClick}
    />
  );
};

export default Input;
