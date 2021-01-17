import React from "react";
import styled from "styled-components";
import SharedComponents from "../reuseable_components";
import learn_more from "../../assests/icons/learn_more-white.png";
import iphone from "../../assests/images/iphone.png";
import * as api from "../../api";
import { max_devices } from "../devices.js";

import { AppButton } from "../index";

const MainContainer = styled.div`
  margin-bottom: 0px;
  @media ${max_devices.tablet} {
    margin-bottom: 20px;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -20px;
  width: 58%;
  padding: 100px 100px 0px 100px;

  @media (max-width: 1030px) {
    padding: 50px 50px 0px 50px;
  }

  @media (max-width: 900px) {
    padding: 20px 20px 0px 20px;
  }

  & > .background {
    background-image: url(${iphone});
    background-size: contain;
    background-position: bottom right;
    background-repeat: no-repeat;
    flex-grow: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 10%;
    z-index: -1;

    @media ${max_devices.tablet} {
      max-height: 40vh;
      background-position center;
      padding: 100px 60px;
      position: relative
    }
  }

  @media ${max_devices.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    width:auto;
  }
`;

const InformationDiv = styled.div`
  flex: 1;
  width: 100%
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom:45%;

  @media ${max_devices.tablet} {
    width: 100%;
    height: 50%;
    align-items: center;
    padding-left: 0px;
    margin-bottom:20%;

  }
`;

const Header = styled.h2`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;

  @media ${max_devices.tablet} {
    font-size: 200%;
    & > .break {
      display: none;
    }

    @media (max-width: 400px) {
      font-size: 150%;
    }
  }
`;

const Blurb = styled.span`
  opacity: 0.8;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 48px;

  @media ${max_devices.laptopM} {
    font-size: 95%;
  }

  @media (max-width: 1100px) {
    font-size: 110%;
    & > .break {
      display: none;
    }
  }

  @media (max-width: 400px) {
    font-size: 100%;
  }
`;

const InputContent = styled.div`
  margin: 20px 0px;
  display: flex;
  @media ${max_devices.tablet} {
    flex-direction: column;
    margin: auto auto 20px;
  }
`;

const LearnMore = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${max_devices.tablet} {
    margin-top: 20px;
  }
`;

const LearnMoreImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 25px;
`;

class EarlyAccessDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      display: false,
      error: false,
      errormsg: "",
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  handleChange(e) {
    if (e.target.value == "") {
      this.setState({
        error: false,
        errormsg: ""
      });
    }
    this.setState({ email: e.target.value });
  }

  handleClick(e) {
    this.setState({ isLoading: true });

    api
      .webRegistartion({ email: this.state.email })
      .then(res => {
        this.setState({ display: true, isLoading: false });
      })
      .catch(error => {
        let msg = "";
        if (error.response.data.error.message != "Parameter error.") {
          msg = error.response.data.error.message;
        } else {
          msg = "Invalid email address";
        }
        this.setState({
          error: true,
          isLoading: false,
          errormsg: msg
        });
      });
  }

  onKeyPress(e) {
    if (e.which === 13) {
      this.handleClick(e);
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <MainContainer>
          <Container>
            <InformationDiv>
              <Header>
                Remember <br className="break" /> what you read
              </Header>
              <Blurb>
                Use the Hazelnut mobile app to capture and <br class="break" />
                organise your reading notes so that they remain
                <br class="break" /> in your memory and conversations.
              </Blurb>
              {!this.state.display && (
                <div>
                  <InputContent>
                    <SharedComponents.Input
                      error={this.state.error}
                      errormsg={this.state.errormsg}
                      changeAction={this.handleChange}
                      onKeyPress={this.onKeyPress}
                      {...InputProperties}
                    />
                    &nbsp;
                    <AppButton
                      {...Buttonproperties}
                      isLoading={isLoading}
                      clickAction={this.handleClick}
                      width="200px"
                    />
                    {/* <SharedComponents.Button
                      {...Buttonproperties}
                      clickAction={this.handleClick}
                    /> */}
                  </InputContent>
                  <span>
                    <b style={{ color: "#3E2689", fontWeight: "600" }}>2,489</b>
                    people ahead of you
                  </span>
                </div>
              )}
              {this.state.display && (
                <SharedComponents.Response
                  email={this.state.email}
                  {...Response}
                />
              )}
            </InformationDiv>
            <div className="background"></div>
          </Container>
          <LearnMore>
            <LearnMoreImage src={learn_more} />
          </LearnMore>
        </MainContainer>
      </>
    );
  }
}

// Properties are mentioned here
const Buttonproperties = {
  background: "#3e2689",
  text: "Get Early Access!",
  color: "white",
  height: 50
};

const InputProperties = {
  color: "#F3F4F8",
  placeholderColor: "#91969E",
  response_width: "100%",
  placeholderText: "Your email address",
  placeholderColor: "#91969E"
};

const Response = {
  width: "80%",
  color: "#F6F5FA",
  text_color: "#000000",
  font_color: "#000000",
  email_color: "#1A1A1A",
  button_color: "#FFFFFF",
  button_background: "#3E2689",
  input_color: "#FFFFFF",
  text: "Create beta account"
};

export default EarlyAccessDiv;
