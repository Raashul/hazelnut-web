import React from "react";
import styled from "styled-components";
import * as api from "../api";
import SharedComponents from "../components/reuseable_components";
import bookPhone from "../assests/images/book_phone.png";
import { max_devices } from "../components/devices.js";

import { AppButton } from "../components";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 100vh;

  @media ${max_devices.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
  }
`;

const InfoContainer = styled.div`
  flex: 1 1;
  flex-basis: auto;
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px 70px 40px 85px;

  @media ${max_devices.laptopM} {
    padding: 60px;
  }

  @media (max-width: 980px) {
    width: 50%;
    height: auto;
  }

  @media ${max_devices.tablet} {
    width: 100%;
    padding: 40px;
    height: auto;
  }

  & > .mainBlurb {
    font-size: 105%;
    width: 90%;
    color: rgba(26, 26, 26, 0.6) !important;
    margin-bottom: 16px !important;
  }

  & > .passwordInput {
    width: 60%;

    @media ${max_devices.tablet} {
      width: 60%;
    }
  }

  & > .mainTitle {
    font-size: 200%;
    margin-bottom: 20px;
    width: 60%;

    @media ${max_devices.tablet} {
      font-size: 110%;
      width: 100%;
    }
  }

  & > .button {
    margin-top: 16px;
    width: 60%;
    box-sizing: content-box;
  }
`;

const ImageContainer = styled.div`
  flex: 1 1;
  flex-basis: auto;
  width: 55%;
  background-color: #3e2689;
  background-image: url(${bookPhone});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60% auto;

  @media ${max_devices.laptop} {
    background-size: 90% auto;
  }

  @media ${max_devices.tablet} {
    width: 100%;
    min-height: 400px;
    background-size: 50% auto;
  }
`;

const Image = styled.img`
  width: 10%;
  height: auto;
  margin-bottom: 50px;
`;

const LoginText = styled.div`
  color: rgba(26, 26, 26, 0.6);
  line-height: 30px;
  font-size: 105%;
  margin-bottom: 36px;
  & > span {
    color: #1a1a1a;
  }
  & > a {
    font-size: 100%;
    color: #3e2689;
  }
`;

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apicalled: false,
      signup_token: "",
      password: "",
      email: "",
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleClick(e) {
    let { email, password, signup_token, user_id } = this.state;
    this.setState({isLoading: true})
    api
      .createPassword({ email, password, signup_token, user_id })
      .then(res => {
        this.setState({isLoading: false})

        this.props.history.push(`/login`);
      })
      .catch(error => {
        this.setState({isLoading: false})

        console.log(error);
      });
  }

  componentDidMount() {
    api
      .getInfo(this.props.match.params.signupID)
      .then(res => {
        this.setState({
          apicalled: true,
          email: res.data.email,
          signup_token: this.props.match.params.signupID,
          user_id: res.data.user_id
        });
      })
      .catch(error => {
        this.props.history.push(`/`);
      });
  }

  render() {
    if (!this.state.apicalled) return null;

    return (
      <div>
        <Container>
          <InfoContainer>
            <div>
              <Image src={require("../assests/images/logoImage.png")} />
            </div>
        
            <SharedComponents.Title
              className="mainTitle"
              title="Create your beta account"
            />
            <LoginText>
              You've joined the waiting list. The reservation is reserved for{" "}
              <span>{this.state.email}</span>.<a href="/#"> Not you?</a>
            </LoginText>
            <SharedComponents.Blurb
              className="mainBlurb"
              text="Set up a password to create a beta account to refer your friends and get ahead on the list."
            />
            
            <SharedComponents.Input
              changeAction={this.handleChange}
              {...PasswordProperties}
              type="password"
              name="password"
              className="passwordInput"
            />

            <AppButton 
              clickAction={this.handleClick}
              isLoading={this.state.isLoading}
              color="#ffffff"
              background="#3E2689"
              text="Create beta account"
              width="280px"
            />

            {/* <SharedComponents.Button
              clickAction={this.handleClick}
              className="button"
              color="#ffffff"
              text="Create beta account"
              background="#3E2689"
            /> */}

          </InfoContainer>
          <ImageContainer />
        </Container>
      </div>
    );
  }
}

const PasswordProperties = {
  placeholderColor: "#91969E",
  placeholderText: "Enter your password",
  color: "#F3F4F8"
};

export default Signup;
