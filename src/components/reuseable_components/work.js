import React from "react";
import styled from "styled-components";
import { max_devices } from "../devices";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 6%;

  @media ${max_devices.tablet} {
    align-items: center;
    margin-bottom: 50px;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;

  @media ${max_devices.tablet} {
    align-items: center;
  }
`;

const ImageDiv = styled.div`
  height: 100px;
  width: 100px;
  margin-bottom: 19px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Header = styled.h2`
  font-size: 175%;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 100%;

  @media ${max_devices.tablet} {
    font-size: 110%;
  }
`;

const Work = props => {
  return (
    <Container>
      <ImageDiv>
        <Image src={require("../../assests/images/" + props.image + ".png")} />
      </ImageDiv>
      <ContentDiv>
        <Header>{props.header}</Header>
        <Paragraph> {props.text}</Paragraph>
      </ContentDiv>
    </Container>
  );
};

export default Work;
