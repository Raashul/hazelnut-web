import React from "react";
import styled from "styled-components";
import SharedComponents from "../components/reuseable_components";
import bookPhone from "../assests/images/book_phone.png";
import { max_devices } from "../components/devices.js";
import * as api from "../api";
import { AppButton } from "../components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  widht: 100vw;

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
  flex-direction: column;
  margin: auto 0px;
  padding: 100px;

  @media ${max_devices.laptopM} {
    padding: 60px;
  }

  @media (max-width: 980px) {
    width: 50%;
  }

  @media ${max_devices.tablet} {
    width: 100%;
  }

  & > .mainTitle {
    font-size: 200%;
    margin-bottom: 40px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  & > .emailInput {
    width: 50%;
    margin-bottom: 15px;

    :focus {
      border: 1px solid blue;
    }
  }

  & > .button {
    width: 65%;
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
  background-size: 70% auto;

  @media ${max_devices.laptop} {
    background-size: 90% auto;
  }

  @media ${max_devices.tablet} {
    width: 100%;
    min-height: 400px;
    background-size: 50% auto;
  }
`;

const SingupText = styled.span`
  font-size: 77%;
  color: #3e2689;
  font-weight: 500;

  & > a {
    font-size: 100%;
  }
`;

const Image = styled.img`
  width: 10%;
  height: auto;
  margin-bottom: 50px;
`;

const Blurb = styled.p`
  color: rgba(26, 26, 26, 0.6);
  font-weight: 300;
  margin-bottom: 16px;
`;

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apicalled: false,
      email: "",
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    this.setState({ isLoading: true });
    // Call api here
    api
      .getPasswordCode({ email: this.state.email })
      .then(res => {
        setTimeout(() => {
          this.setState({ isLoading: false });
          this.props.history.push("/login");
        }, 2500);
      })
      .catch(errors => {
        this.setState({ isLoading: false });

        console.log(errors.response);
      });
  }

  render() {
    return (
      <Container>
        <InfoContainer>
          <div>
            <Image src={require("../assests/images/logoImage.png")} />
          </div>

          <SharedComponents.Title
            className="mainTitle"
            title="Reset Password"
          />

          {!this.state.apicalled && (
            <>
              <Blurb>
                We’ll send you a magic link at this <br /> email to reset your
                password.
              </Blurb>

              <FormContainer>
                <SharedComponents.Input
                  changeAction={this.handleChange}
                  {...EmailProperties}
                  type="email"
                  name="email"
                  className="emailInput"
                />
                <AppButton
                  width="65%"
                  background="#3E2689"
                  color="#ffffff"
                  text="Reset Password"
                  clickAction={this.handleClick}
                  isLoading={this.state.isLoading}
                />

                {/* <SharedComponents.Button
                clickAction={this.handleClick}
                className="button"
                color="#ffffff"
                background="#3E2689"
                text="Reset Password"
              /> */}
              </FormContainer>
            </>
          )}

          {this.state.apicalled && (
            <Blurb>
              An email has been sent to <br />
              <span style={{ color: "black" }}>{this.state.email}.</span>
              <br />
              You can use the link in the email to <br />
              reset your password.
            </Blurb>
          )}
          <SingupText>
            {" "}
            <a href="/login"> Back to Login </a>{" "}
          </SingupText>
        </InfoContainer>
        <ImageContainer />
      </Container>
    );
  }
}

const EmailProperties = {
  placeholderColor: "#91969E",
  placeholderText: "Enter your email ",
  color: "#F3F4F8"
};

export default ResetPassword;
