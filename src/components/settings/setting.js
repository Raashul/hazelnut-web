import React from "react";
import styled from "styled-components";
import SharedComponents from "../reuseable_components";
import Change from "./change";
import { max_devices } from "../devices.js";
import Notification from "./notification";

const Container = styled.div`
  display: flex;
  padding: 20px 180px;
  flex-direction: column;

  @media ${max_devices.tablet} {
    padding: 20px 20px;
  }

  & > .mainTitle {
    font-size: 133%;
    font-weight: 450;
    margin-bottom: 8px;
  }

  & > .mainBody {
    font-size: 88%;
    margin-bottom: 30px;
  }
`;

class Setting extends React.Component {
  render() {
    return (
      <Container>
        <SharedComponents.Blurb className="mainTitle" text="Account Settings" />
        <SharedComponents.Blurb
          style={{
            color: "#91969E"
          }}
          className="mainBody"
          text="Change your email and password settings."
        />
        <Change {...Email} email={this.props.titleName} />
        <Change {...Password} />
        <Notification />
      </Container>
    );
  }
}

const Email = {
  image: "mail",
  head: "Primary Email",
  text: "Your primary email is set to ",
  button_name: "Change",
  input_namee: "New Email Address",
  input_password: "Your password",
  input_type: "email",
  input_name: "email"
};

const Password = {
  image: "lock",
  head: "Password",
  text:
    "Reset or change your password. Passwords need a minimum of 8 characters, 1 capital letter, 1 number, and 1 special character. ",
  button_name: "Change",
  input_namee: "Old Password",
  input_password: "New password",
  input_type: "password",
  input_name: "password",
  input_old_password: "old_password",
  input_new_password: "new_password"
};

export default Setting;
