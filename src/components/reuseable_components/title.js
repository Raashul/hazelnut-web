import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  color: #1a1a1a;
  font-size: ${props => props.size};
  font-weight: bold;
  font-weight: 900;
`;

const Title = props => {
  return <Heading {...props}> {props.title} </Heading>;
};

export default Title;