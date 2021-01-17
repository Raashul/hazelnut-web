import React from "react";
import styled from "styled-components";
import CollapsibleNotification from "./notification-collpase";
import { max_devices } from "../devices";

const Container = styled.div`
  display: flex;
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

const Line = styled.hr`
  display: flex;
  width: 100%;
  border: 1px solid rgba(62, 38, 137, 0.1);
`;

const Div = styled.div`
  width: 75%;
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

const TextLabel = styled.label`
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
    align-items: center;
    flex-direction: column;
  }
`;

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }

  togglePanel = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row"
          }}
        >
          <Image src={require("../../assests/icons/bell.png")} />
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column"
            }}
          >
            <NotificationDiv>
              <Div>
                <Head>Notifications</Head>
                <Paragraph>Change your email preferences.</Paragraph>
              </Div>
            </NotificationDiv>
            {this.state.on && (
              <div>
                <CollapsibleNotification {...Transactional} />
                <Line />
                <CollapsibleNotification {...Nurturing} />
                <Line />
                <CollapsibleNotification {...Incentive} />
                <Line />
                <CollapsibleNotification {...Updates} />
              </div>
            )}
          </div>
        </div>
        <TextLabel onClick={this.togglePanel}>Manage</TextLabel>
      </Container>
    );
  }
}

const Transactional = {
  head: "Transactional",
  paragraph:
    "We will keep you informed of all activties happening on your account."
};

const Nurturing = {
  head: " Nurturing",
  paragraph: "We will keep you engaged with marketing news and reminders."
};

const Incentive = {
  head: "Incentive",
  paragraph: "We will send you special discounts and offers."
};

const Updates = {
  head: "Updates",
  paragraph: "We will keep you updated with the latest news and releases."
};

export default Notification;
