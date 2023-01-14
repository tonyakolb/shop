import React from "react";

const Input = ({
  value,
  className,
  placeholder,
  onChange,
  type,
  onClick,
  onFocus,
  onBlur,
  type,
  name,
  id,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
          onClick={onClick}
          name={name}
          id={id}
    />
  );
};

export default Input;
