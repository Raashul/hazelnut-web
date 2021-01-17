import React from "react";
import styled from "styled-components";
import SharedComponents from "../components/reuseable_components";
import book_phone from "../assests/images/book_phone.png";
import learn_more from "../assests/icons/learn_more.png";
import flower from "../assests/icons/flower.png";
import * as api from "../api";

import { max_devices } from "../components/devices";

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

class ReferralLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apicalled: false,
      response: {},
      email: this.props.match.params.email,
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  componentDidMount() {
    api
      .checkInvitation({
        email: this.props.match.params.email,
        refer_code: this.props.match.params.referCode
      })
      .then(res => {
        if (res.status == 200) {
          console.log(res);
          this.setState({
            apicalled: true,
            response: res.data
          });
        }
      })
      .catch(error => {
        console.log(error);
        this.props.history.push("/");
      });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleClick(e) {
    const payload = {
      email: this.state.email,
      signup_token: this.state.response.signup_token,
      password: this.state.password,
      user_referred_by: this.state.response.user_referred_by,
      user_id: this.state.response.user_id
    };
    api
      .createreferPassword(payload)
      .then(res => {
        this.props.history.push("/login");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.apicalled) return null;

    return (
      <MainContainer>
        <LogoContainer>
          <Logo src={flower} />
        </LogoContainer>
        <Container>
          <InformationDiv>
            <Blurb>
              <span style={{ fontWeight: 900, fontSize: "36px" }}>
                Hazelnut &nbsp;
              </span>
              helps you <br />
              capture and organize notes <br />
              from the books you read, <br />
              both physical and digital.
            </Blurb>
            <SharedComponents.ResponseDiv
              clickAction={this.handleClick}
              changeAction={this.handlePassword}
              email={this.state.email}
             
            />
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

export default ReferralLanding;
