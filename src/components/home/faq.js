import React from "react";
import styled from "styled-components";
import QuestionDiv from "../reuseable_components/question";
import privacy from "../../assests/icons/privacy.svg";
import save from "../../assests/icons/save.svg";
import price from "../../assests/icons/price.svg";
import plus from "../../assests/icons/plus.svg";
import start from "../../assests/icons/start.png";
import mobile from "../../assests/icons/mobile.png";
import { max_devices } from "../devices.js";

const Container = styled.div`
  background-color: rgba(62, 38, 137, 0.05);
  display: flex;
  padding: 60px 100px 150px;
  justify-content: center;
  @media (max-width: 1000px) {
    padding: 60px 50px 150px;
  }
  @media ${max_devices.laptop} {
    padding: 30px 65px 80px;
  }

  @media ${max_devices.tablet} {
    flex-direction: column;
    padding: 40px 0px;
    align-items: center;
  }
`;

const Column = styled.div``;

const FaqDiv = props => {
  return (
    <Container>
      <Column>
        <QuestionDiv
          source={privacy}
          question={"Are my notes private?"}
          text={
            "Yes, all your notes are locally stored in your mobile phone. Hazelnut cannot read any of your notes unless you make them public."
          }
        />
        <QuestionDiv
          source={plus}
          width={"5%"}
          question={"Can I store other notes?"}
          text={
            "Yes, you can store anything (text, highlights or images) based on a genre or your mood in Hazelnut."
          }
        />
        <QuestionDiv
          source={price}
          width={"5%"}
          question={"Is Hazelnut paid or free?"}
          text={
            "Hazelnut is completely free for now. We will have a pricing model in future."
          }
        />
      </Column>

      <Column>
        <QuestionDiv
          source={save}
          width={"5%"}
          question={"How can I save my notes?"}
          text={
            "You can save your notes using the capture or highlight features and organise them using buckets.  "
          }
        />
        <QuestionDiv
          source={mobile}
          width={"5%"}
          question={"Do you have a mobile app?"}
          text={
            "We only have android and iOS versions of the app. Create a beta account to get access."
          }
        />
        <QuestionDiv
          source={start}
          width={"5%"}
          question={"How can I start using Hazelnut?"}
          text={
            "We are currently in public beta but you can sign up on our waitlist. If you refer your friends, you get ahead in the wait list."
          }
        />
      </Column>
    </Container>
  );
};

export default FaqDiv;
