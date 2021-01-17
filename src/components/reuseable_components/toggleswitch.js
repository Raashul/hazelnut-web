import React from "react";
import styled from "styled-components";

const CheckBoxWrapper = styled.label`
  display: flex;
  position: relative;
  align-items: center;
  background-color: #f8f6ff;
  border: 1px solid rgba(64, 10, 113, 0.1);
  border-radius: 13px;
  width: 44px;
  height: 24px;
`;

const CheckBoxLabel = styled.span`
  position: absolute;
  border-radius: 13px;
  background-color: #f8f6ff;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background-color: #3f3ba0;
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  border-radius: 13px;
  height: 17px;
  width: 17px;
  &:checked + ${CheckBoxLabel} {
    &::after {
      content: "";
      display: block;
      background-color: rgba(63, 59, 160, 0.21);
      border-radius: 50%;
      margin-left: 23px;
      transition: 0.2s;
    }
  }
`;

const ToggleSwitch = props => {
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" />
      <CheckBoxLabel />
    </CheckBoxWrapper>
  );
};

export default ToggleSwitch;
