import React from "react";
import styled from "styled-components";
import { max_devices } from "../devices";

const Container = styled.div`
  display: flex;
  padding: 24px;
  border-radius: 4px;
  background-color: ${props => props.color};
  width: 80%;
  margin-bottom: 10px;
  flex-direction: column;

  @media ${max_devices.LaptopM} {
    width: ${props => props.width};
  }
`;

const TextContainer = styled.div`
  background-color: ${props => props.text_color};
  font-weight: 300;
  margin-bottom: 20px;
  font-size: 90%;

  @media ${max_devices.laptopL} {
    & > .break {
      display: none;
    }
`;

const Response = props => {
  return (
    <Container {...props}>
      <TextContainer>
        Thank you, you’ve been added to the waiting list. This
        <br className="break" /> reservation is reserved for &nbsp;
        <span {...props} style={{ color: props.email_color }}>
          {props.email}.
        </span>
      </TextContainer>
      <TextContainer>
        A verification email has been sent to your email account.
        <hr />
      </TextContainer>
      <TextContainer>
        Please click on the magic link that has been just been sent to your
        <br className="break" />
        &nbsp; email account to verify your email and continue registration
        process.
      </TextContainer>
      <div></div>
    </Container>
  );
};

export default Response;
