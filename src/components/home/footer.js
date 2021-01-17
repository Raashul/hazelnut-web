import React from "react";
import styled from "styled-components";
import flower from "../../assests/icons/flower.png";
import facebook from "../../assests/icons/facebook.png";
import twitter from "../../assests/icons/twitter.png";
import instagram from "../../assests/icons/instagram.png";
import arrow from "../../assests/icons/arrow_white.svg";
import { max_devices } from "../devices.js";

const Container = styled.div`
  background-color: #3e2689;
  display: flex;
  width: 100vw;
  padding: 100px 170px;

  @media (max-width: 1000px) {
    padding: 80px 50px;
  }

  @media ${max_devices.laptop} {
    padding: 60px 65px;
  }

  @media ${max_devices.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    padding: 40px 45px;
  }
`;

const ImageDiv = styled.div`
  flex: 1 1;
  flex-basis: auto;
  width: 55%;

  @media ${max_devices.laptop} {
    width: 45%;
  }

  @media ${max_devices.tablet} {
    display: flex;
    justify-content: center;
    width: 90%;
  }
`;

const Image = styled.img`
  width: 12%;
  height: auto;

  @media ${max_devices.laptop} {
    width: 20%;
  }

  @media ${max_devices.tablet} {
    width: 10%;
  }
`;

const TextDiv = styled.div`
  flex: 1 1;
  flex-basis: auto;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${max_devices.laptop} {
    width: 55%;
  }

  @media ${max_devices.tablet} {
    width: 90%;
    align-items: center;
  }
`;

const Blurb = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 135%;
  font-weight: 300;
  margin-bottom: 55px;

  .bold-text {
    font-size: 100%;
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
  }

  @media ${max_devices.laptopM} {
    font-size: 120%;
    margin-bottom: 40px;
  }
`;

const Icons = styled.img`
  height: auto;
  width: 32px;
  margin-left: 16px;
`;
const Arrow = styled.img`
  height: 18px;
  width: auto;
  margin: 3px 3px 0 3px;
  display: inline-block;
`;
const Footer = () => {
  return (
    <Container>
      <ImageDiv>
        <Image src={flower} />
      </ImageDiv>
      <TextDiv>
        <Blurb>
          Capture, organise according to a book, <br />
          genre or mood and store/share your <br />
          reading notes or set reminders to <br />
          continue again.{" "}
          <br />
          <a href="/">
            {" "}
            <span className="bold-text"> Get Hazelnut </span>
            <Arrow src={arrow} />
          </a>
        </Blurb>
        <div style={{ "marginBottom": "40px" }}>
          <a
            href="https://www.facebook.com/gethazelnut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons src={facebook} />
          </a>
          <a
            href="https://www.instagram.com/gethazelnut/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons src={instagram} />
          </a>
          <a
            href="https://twitter.com/gethazelnut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons src={twitter} />
          </a>
        </div>
      </TextDiv>
    </Container>
  );
};

export default Footer;
