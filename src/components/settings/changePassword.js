import React from "react";
import styled from "styled-components";
import CollapsibleDiv from "./collapsible";
import { max_devices } from "../devices";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.55);
  padding: 20px;
  max-width: 921px;
  border: 1px solid rgba(64, 10, 113, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Div = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;

  @media ${max_devices.tablet} {
    width: 100%;
  }
`;

const ContentDiv = styled.div`
  display: flex
  width: 25%;


  @media ${max_devices.tablet} {
    width: 100%;
    padding: 20px;
 
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

  @media ${max_devices.tablet} {
    margin-left: auto;
    margin-right: auto;
  }
`;

const NotificationDiv = styled.div`
  display: flex;
  width: 100%;

  @media ${max_devices.tablet} {
    align-items: center;
    flex-direction: column;
  }
`;

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: {}
    };
  }

  togglePanel = () => {
    this.setState({
      on: !this.state.on,
      off: !this.state.off
    });
  };

  handleClick = () => {};

  changeAction = (e, input) => {
    console.log(input, e.target.value);
  };

  render() {
    return (
      <Container {...this.props}>
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
            <ContentDiv>
              <TextLabel onClick={this.togglePanel}>
                {this.props.button_name}
              </TextLabel>
            </ContentDiv>
          </NotificationDiv>
          {this.state.on && (
            <CollapsibleDiv
              inputnamee={this.props.input_namee}
              input_old_password={this.props.input_old_password}
              input_new_password={this.props.input_new_password}
              password={this.props.input_password}
              type={this.props.input_type}
              name={this.props.input_name}
              handleClick={this.handleClick}
              changeAction={this.changeAction}
            />
          )}
        </div>
      </Container>
    );
  }
}

export default ChangePassword;
