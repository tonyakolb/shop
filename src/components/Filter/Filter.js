import React from "react";
import "./Filter.css";

const Filter = ({className}) => {
  return (
    <div id="myDropdown" className={className}>
      <button>Цена по возрастанию</button>
      <button>Цена по убыванию</button>
      <button>В наличии</button>
      <button>Уцененные</button>
      <button>Акционные товары</button>
    </div>
  );
};

export default Filter;
