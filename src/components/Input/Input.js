import React from "react";

const Input = ({
  value,
  className,
  placeholder,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {value}
    </input>
  );
};

export default Input;
