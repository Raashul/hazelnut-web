import React, { Component } from "react";
import styled from "styled-components";
import SharedComponents from "../components/reuseable_components";
import Navbar from "../components/navbar";
import { max_devices } from "../components/devices.js";

const Container = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .mainText {
    @media (max-width: 450px) {
      font-size: 120%;
    }
  }

  & > .helpfulLinkText {
    @media (max-width: 450px) {
      font-size: 95%;
    }
  }
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 70%;
  margin-left: 20%;

  @media (max-width: 400px) {
    margin-bottom: 50%;
  }
`;

const Header = styled.h2`
  font-size: 200%;
  font-weight: 800;
  margin-bottom: 20px;

  @media ${max_devices.tablet} {
    font-size: 180%;

    @media (max-width: 400px) {
      font-size: 150%;
    }
  }
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  & > a {
    text-align: center;
    font-weight: 450;
    margin-bottom: 15%;
    cursor: pointer;
  }
`;

class Error extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container>
          <div>
            <Image src={require("../assests/images/logoImage.png")} />
          </div>
          <Header>404 Page Not Found</Header>
          <SharedComponents.Blurb
            className="mainText"
            text={"We can't find the page you're looking for."}
            color="#1A1A1A"
            size="150%"
            style={{ opacity: "60%", marginBottom: "3%" }}
          />
          <SharedComponents.Blurb
            color="#1A1A1A"
            size="100%"
            style={{ opacity: "60%" }}
            text={"Here are some links that may be helpful:"}
            className="helpfulLinkText"
          />
          <LinkDiv>
            <a href="/">
              <SharedComponents.Blurb
                className="helpful-link"
                text={"Home"}
                color="#3E2689"
                size="80%"
              />
            </a>
            <a href="/login">
              <SharedComponents.Blurb
                className="helpful-link"
                text={"Login"}
                color="#3E2689"
                size="80%"
              />
            </a>
            <a href="/landing">
              <SharedComponents.Blurb
                className="helpful-link"
                text={"Get Early Access"}
                color="#3E2689"
                size="80%"
              />
            </a>
          </LinkDiv>
        </Container>
      </>
    );
  }
}

export default Error;
