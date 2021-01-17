import React from "react";
import styled from "styled-components";
import SharedComponents from "../reuseable_components/index";
import whatsapp from "../../assests/icons/whatsapp.jpeg";
import facebook from "../../assests/icons/facebook.jpg";
import twitter from "../../assests/icons/twitter2.png";
import SendingInvitation from "./sendingInvitation";
import CustomLink from "./customLink";
import { max_devices } from "../devices.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: left;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid rgba(64, 10, 113, 0.1);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.55);
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.05);
  font-family: 'Avenir';

  & > .title {
    font-weight: 900;
    font-size: 135%;
    margin-bottom: 10px;
  }

  & > .tag {
    font-size: 110%;
    margin-bottom: 10px;
  }

  & > .paragraph {
    color: rgba(26, 26, 26, 0.6);
    font-size: 90%;
    margin-bottom: 10px;

    & > .break {
      @media ${max_devices.tablet} {
        display: none;
      }
    }
  }

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

class Dash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <span className="title"> Hi {this.props.titleName} </span>
        <span className="tag">
          Jump up the waiting list by referring your friends
        </span>
        <span className="paragraph">
          Refer your friends and get ahead on the waitlist. The more you refer
          <br className="break" />
          and the more friends that join, the sooner you'll get access.
        </span>
        <SocialMedia>
          <SharedComponents.Media link={whatsapp} text="Message" />
          <a
            href="https://www.facebook.com/gethazelnut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SharedComponents.Media link={facebook} text="Share" />
          </a>
          <a
            href="https://twitter.com/gethazelnut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SharedComponents.Media link={twitter} text="Tweet" />
          </a>
          <span> or </span>
        </SocialMedia>
        <b>
          <span
            style={{
              "font-size": "90%",
              "margin-bottom": "10px",
              "font-weight": "500"
            }}
          >
            Invite your friends via email
          </span>
        </b>
        <SendingInvitation
          handleClick={this.props.handleClick}
          tags={this.props.tags}
          isLoading={this.props.isLoading}
        />

        <span
          style={{
            "font-size": "90%",
            "margin-bottom": "10px",
            "font-weight": "500"
          }}
        >
          You can also share your custom link.
        </span>

        <CustomLink referral_id={this.props.referral} />
      </Container>
    );
  }
}

export default Dash;
