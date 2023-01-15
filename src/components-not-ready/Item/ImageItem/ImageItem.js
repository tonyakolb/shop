import React from "react";
import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";

const Image = styled(NavLink)`
  background-image: url(${(props) => props.img});
`;

const ImageBook = ({ image, id }) => <Image to={`/item/${id}`} img={image} />;

export default ImageBook;
