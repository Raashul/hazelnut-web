import React from "react";
import styled from "styled-components";
import SharedComponents from "../components/reuseable_components";
import book_phone from "../assests/images/book_phone.png";
import learn_more from "../assests/icons/learn_more.png";
import flower from "../assests/icons/flower.png";
import * as api from "../api";

import { max_devices } from "../components/devices";

import { AppButton } from "../components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3e2689;
  padding: 20px 0px 10px 0px;
  overflow-x: hidden;
`;

const LogoContainer = styled.div`
  padding-left: 300px;
  margin-bottom: 15px;

  @media (max-width: 1500px) {
    padding-left: 100px;
  }

  @media ${max_devices.tablet} {
    display: flex;
    justify-content: center;
    padding: 0px;
  }
`;

const Logo = styled.img`
  height: auto;
  width: 4%;
  min-width: 40px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 78%;

  @media ${max_devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1 1;
  flex-basis: auto;
  width: 50%;
  background-image: url(${book_phone});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70% auto;

  @media ${max_devices.laptop} {
    background-size: 90% auto;
    min-height: 336px;
  }
`;

const InformationDiv = styled.div`
  flex: 1 1;
  flex-basis: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 300px;

  @media (max-width: 1500px) {
    padding-left: 100px;
  }

  @media (max-width: 1000px) {
    width: 60%;
  }

  @media ${max_devices.tablet} {
    width: 100%;
    height: 50%;
    align-items: center;
    padding-left: 0px;
  }
`;

const Blurb = styled.span`
  color: white;
  opacity: 0.8;
  font-size: 200%;
  font-weight: 300;
  margin-bottom: 30px;

  @media ${max_devices.laptopM} {
    font-size: 170%;
  }

  @media ${max_devices.laptop} {
    font-size: 135%;
  }
`;

const InputContent = styled.div`
  margin: 20px 0px;
  display: flex;

  @media ${max_devices.tablet} {
    flex-direction: column;
  }
`;

const LearnMore = styled.div`
  background-color: #3e2689;
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

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      email: "",
      error: false,
      errormsg: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    api
      .webRegistartion({ email: this.state.email })
      .then(res => {
        this.setState({ display: true });
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
    return (
      <MainContainer>
        <LogoContainer>
          <Logo src={flower} />
        </LogoContainer>
        <Container>
          <InformationDiv>
            <Blurb>
              <span style={{ fontWeight: "bold", fontSize: 36 }}>
                Hazelnut{" "}
              </span>{" "}
              helps you <br />
              capture and organize notes <br />
              from the books you read, <br />
              both physical and digital.
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
                  <AppButton
                    {...Buttonproperties}
                    clickAction={this.handleClick}
                  />
                  {/* <SharedComponents.Button
                    {...Buttonproperties}
                    clickAction={this.handleClick}
                  /> */}
                </InputContent>
                <span style={{ color: "white" }}>
                  <span style={{ fontSize: 20, fontWeight: "bold" }}>
                    {" "}
                    2,489{" "}
                  </span>{" "}
                  people ahead of you
                </span>
              </div>
            )}
            {this.state.display && (
              <SharedComponents.Response
                email={this.state.email}
                {...Response}
                style={{ color: "#b7afd3" }}
              />
            )}
          </InformationDiv>
          <ImageContainer />
        </Container>
        <LearnMore>
          <a
            style={{ color: "white", marginBottom: "10px", fontSize: 12 }}
            href="/"
            target="_blank"
          >
            Learn More
          </a>
          <LearnMoreImage src={learn_more} />
        </LearnMore>
      </MainContainer>
    );
  }
}

// Properties are mentioned here
const Buttonproperties = {
  text: "Get Early Access",
  color: "#3E2689",
  height: 50,
  width: 170,
  background: "#FFFFFF",
  marginLeft: 5
};

const InputProperties = {
  color: "#4D3891",
  fontColor: "white",
  placeholderText: "Your email address",
  placeholderColor: "rgba(255,255,255,0.79)"
};

const Response = {
  width: "90%",
  color: "#4D3891",
  font_color: "#b7afd3",
  email_color: "white",
  button_color: "#3E2689",
  button_background: "white",
  input_color: "rgba(255,255,255,0.3)",
  // type_text : "text",
  // placeholder_Color = "#91969E",
  // placeholderText = "Enter a password",
  text: "Create beta account"
};

export default Landing;
