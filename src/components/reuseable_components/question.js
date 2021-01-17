import React from "react";
import styled from "styled-components";
import { max_devices } from "../devices";

const Container = styled.div`
  padding: 20px;
  margin: 30px auto;
  height: 30%;
  width: 80%;
  border-radius: 8px;
  display: flex;
  background-color: white;

  @media ${max_devices.laptop} {
    width: 90%;
    height: 32%;
  }

  @media ${max_devices.tablet} {
    display: flex;
    justify-content: center;
    padding: 20px 35px;
  }
`;

const ImageDiv = styled.div`
  margin-right: 20px;
`;

const Image = styled.img`
  height: 30px;
  width: 24px;

  @media ${max_devices.tablet} {
    width: 30px;
  }
`;

const Question = styled.p`
  font-weight: 900;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 27px;
  font-family: Avenir;
`;

const Paragraph = styled.p`
  font-weight: 300;
`;

const QuestionDiv = props => {
  return (
    <Container>
      <ImageDiv>
        <Image src={props.source} />
      </ImageDiv>
      <div>
        <Question> {props.question} </Question>
        <Paragraph>{props.text}</Paragraph>
      </div>
    </Container>
  );
};

export default QuestionDiv;
