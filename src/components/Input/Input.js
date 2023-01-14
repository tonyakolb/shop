import React from "react";

const Input = ({
  value,
  className,
  placeholder,
  onChange,
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
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          type={type}
          name={name}
          id={id}
    >
    </input>
  );
};

export default Input;
