import React from "react";
import { Link } from "react-router-dom";

const NavigateElement = ({ navigate_context, navigate_elem, to}) => {
    return (
        <Link to={to} className={navigate_elem}>
      {navigate_context}
    </Link>
  );
};

export default NavigateElement;
