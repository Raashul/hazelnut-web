import React from "react";
import styled from "styled-components";
import CollapsibleDiv from "./collapsible";
import { max_devices } from "../devices";

import * as api from "../../api";
import { logout } from "../../auth";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.55);
  padding: 20px;
  max-width: 921px;
  border: 1px solid rgba(64, 10, 113, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;

  @media ${max_devices.tablet} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Div = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;

  @media ${max_devices.tablet} {
    width: 100%;
  }
`;

const Image = styled.img`
  margin-right: 20px;
  height: 48px;
  width: 48px;

  @media ${max_devices.tablet} {
    margin-right: 20px;
  }
`;

const Head = styled.p`
  font-size: 88%;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Paragraph = styled.p`
  max-width: 540px;
  color: #91969e;
  font-size: 88%;
`;

const TextLabel = styled.p`
  color: #3e2689;
  font-weight: 800;
  font-size: 77%;
  margin-left: auto;
  margin-right: 0;
  cursor: pointer;
  padding: 20px;

  @media ${max_devices.tablet} {
    margin-left: auto;
    margin-right: auto;
  }
`;

const NotificationDiv = styled.div`
  display: flex;
  width: 100%;

  @media ${max_devices.tablet} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

class Change extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      isLoading: false,
      input: {
        old_password: "",
        new_password: ""
      }
    };
  }

  togglePanel = () => {
    this.setState({
      on: !this.state.on,
      off: !this.state.off
    });
  };

  handleClick = () => {
    this.setState({ isLoading: true });
    const { old_password, new_password } = this.state.input;
    const payload = {
      old_password,
      password: new_password
    };

    api
      .directPasswordChange(payload)
      .then(response => {
        this.setState({ isLoading: false });
        logout();
      })
      .catch(e => {
        alert(e.response);
        this.setState({ isLoading: false });
      });
  };

  changeAction = (e, input) => {
    this.setState({
      input: Object.assign({}, this.state.input, { [input]: e.target.value })
    });
  };

  render() {
    return (
      <Container {...this.props}>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row"
          }}
        >
          <Image
            src={require("../../assests/icons/" + this.props.image + ".png")}
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column"
            }}
          >
            <NotificationDiv>
              <Div>
                <Head>{this.props.head}</Head>
                <Paragraph>
                  {this.props.text}
                  <span style={{ color: "black", fontSize: "100%" }}>
                    {this.props.email}
                  </span>
                </Paragraph>
              </Div>
            </NotificationDiv>
            {this.state.on && (
              <CollapsibleDiv
                inputnamee={this.props.input_namee}
                password={this.props.input_password}
                input_old_password={this.props.input_old_password}
                input_new_password={this.props.input_new_password}
                type={this.props.input_type}
                name={this.props.input_name}
                handleClick={this.handleClick}
                changeAction={this.changeAction}
                isLoading={this.state.isLoading}
              />
            )}
          </div>
        </div>
        <TextLabel onClick={this.togglePanel}>
          {this.props.button_name}
        </TextLabel>
      </Container>
    );
  }
}

export default Change;
