
import React from "react";
import styled from "styled-components";

const Content = styled.span`
  color: ${props => props.color};
  font-family: 'Avenir';
  font-size: ${props => props.size || "100%"};
  font-weight: ${props => props.weight};
`;

const TextDiv = props => {
    return (
        <Content {...props}>
            {props.text}
        </Content>
    );
  }
export default TextDiv;
