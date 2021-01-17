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

  & > .passwordInput {
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

const Image = styled.img`
  width: 10%;
  height: auto;
  margin-bottom: 50px;
`;

class NewPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apicalled: false,
      password: "",
      isLoading: false,
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    api
      .validatePassword(this.props.match.params.code)
      .then(res => {
        this.setState({
          apicalled: true,
          email: res.data.email
        });
      })
      .catch(errors => {
        this.props.history.push("/");
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    this.setState({ isLoading: true });

    api
      .createNewPassword({
        email: this.state.email,
        code: this.props.match.params.code,
        password: this.state.password
      })
      .then(res => {
        setTimeout(() => {
          this.setState({ isLoading: false });
          this.props.history.push("/login");
        }, 2500);
      })
      .catch(errors => {
        this.setState({ isLoading: false });

        console.log(errors);
      });
  }

  render() {
    if (!this.state.apicalled) return null;

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

          <FormContainer>
            <SharedComponents.Input
              changeAction={this.handleChange}
              {...PasswordProperties}
              type="password"
              name="password"
              className="passwordInput"
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
              clickAction ={this.handleClick}
              className="button"
              color="#ffffff"
              background="#3E2689"
              text="Reset Password"
            /> */}
          </FormContainer>
        </InfoContainer>
        <ImageContainer />
      </Container>
    );
  }
}

const PasswordProperties = {
  placeholderColor: "#91969E",
  placeholderText: "Enter your password ",
  color: "#F3F4F8"
};

export default NewPassword;
