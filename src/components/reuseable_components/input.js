import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  margin-bottom: 15px;
`;

const InputField = styled.input`
  padding: 12px 30px;
  border-radius: 4px;
  background-color: ${props => props.color || "#ececec"};
  color: ${props => props.fontColor || "black"};
  border: ${props => (props.error ? "1px solid red" : "none")};
  outline: none;
  font-size: 89%;
  width: ${props => (props.width ? props.width : "280px")}
 
  :placeholder {
    color: ${props => props.placeholderColor || "red"};
    font-weight: bold;
    font-family: 'Avenir';
    type={${props => props.type};
    name={${props => props.name};
  }
`;

const ErrorMessage = styled.span`
  color: #ff5959;
  font-size: 12px;
`;

const Input = props => {
  return (
    <>
      <Container>
        <InputField
          {...props}
          onChange={e => {
            props.changeAction(e);
          }}
          placeholder={props.placeholderText}
        />
        {props.error && (
          <i
            class="fa fa-exclamation-circle"
            style={{
              color: "red",
              position: "absolute",
              top: "13px",
              left: "250px"
            }}
          ></i>
        )}
        {props.error && props.errormsg.length > 0 && (
          <ErrorMessage> {props.errormsg} </ErrorMessage>
        )}
      </Container>
    </>
  );
};

export default Input;
