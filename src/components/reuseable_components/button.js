import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.button`
  color: ${props => props.color};
  background-color: ${props => props.background};
  font-size: 89%;
  padding: 11px 30px;
  outline:  none;
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid ${props => props.background};
  &:hover {
    color: ${props => props.background} ; 
    background-color: ${props => props.color};
  }
`;

export const Button = props => {
  return (
    <>
      <ButtonDiv onClick={(e) => props.clickAction(e)} {...props}> {props.text} </ButtonDiv>
    </>
  );
};


export default Button;
