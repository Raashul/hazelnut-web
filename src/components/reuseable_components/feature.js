import React from "react";
import styled from "styled-components";
import { max_devices } from "../devices";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 0px 10px;

  @media ${max_devices.laptopM} {
    flex-direction: column-reverses;;
  }

  @media ${max_devices.tablet} {
    align-items: center;
    margin-bottom: 50px;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 255px;

  @media ${max_devices.tablet} {
    align-items: center;
  }

  @media ${max_devices.laptopM} {
    max-width: 300px;
  }
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 19px;
`;

const Header = styled.h2`
  color: #ffffff;
  font-size: 111%;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;

`;

const Feature = props => {
  return (
    <Container>
      <div>
        <Image src={require("../../assests/images/" + props.image + ".png")} />
      </div>
      <ContentDiv>
        <Header>{props.header}</Header>
        <Paragraph> {props.text}</Paragraph>
      </ContentDiv>
    </Container>
  );
};

export default Feature;
