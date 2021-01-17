import React from "react";
import styled from "styled-components";

const ImageDiv = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  margin-bottom: ${props => props.margin};
`;

const Images = props => {
  return <ImageDiv {...props}></ImageDiv>;
};

export default Images;
