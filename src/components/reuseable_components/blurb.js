import React from "react";
import styled from "styled-components";

const BlurbTag = styled.span`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: 300;
  font-family: 'Avenir'
`;

const Blurb = props => {
  return <BlurbTag {...props} onClick = {props.onClick ? props.onClick: () => console.log()}> {props.text} </BlurbTag>;
};

export default Blurb;
