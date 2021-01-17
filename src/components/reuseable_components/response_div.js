import React from "react";
import styled from "styled-components";
import SharedComponents from "./";
import { max_devices } from "../devices";

const Container = styled.div`
  display: flex;
  padding: 24px;
  border-radius: 4px;
  background-color: #4d3891;
  width: 85%;
  margin-bottom: 10px;
  flex-direction: column;

  @media ${max_devices.tablet} {
    width: 70%;
  }
`;

const TextContainer = styled.div`
  color: #B7AFD3;
  font-weight: 300;
  margin-bottom: 20px;
  font-size: 90%;

  @media ${max_devices.laptopL} {
    & > .break {
      display: none;
    }
`;

const ResponseDiv = props => {
  return (
    <Container {...props}>
      <TextContainer>
        Thank you, you’ve been added to the waiting list. This
        <br className="break" /> reservation is reserved for &nbsp;
        <span {...props} style={{ color: "white" }}>
          {props.email}. Not you?
        </span>
      </TextContainer>
      <TextContainer>
        Setup a password to create a beta account to refer your friends
        <br className="break" />
        and get ahead on the list.
      </TextContainer>
      <div>
        <SharedComponents.Input
          changeAction={props.changeAction}
          type="password"
          placeholderColor="rgba(255,255,255,0.79)"
          color="rgba(255,255,255,0.3)"
          placeholderText="Enter a password"
          width='210px'
          color='white'
        />
        <SharedComponents.Button
          clickAction={props.clickAction}
          text="Create Beta Account"
          color="#3E2689"
          background="white"
        />
      </div>
    </Container>
  );
};

export default ResponseDiv;
