import React from "react";

const Input = ({
  value,
  className,
  placeholder,
  onChange,
  type,
  onClick,
  name,
  id,
  required
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
          required={required}
    />
  );
};

export default Input;
