import React from "react";
import styled from "styled-components";
import Tag from "./tagEmail";

import { AppButton } from "../index";

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 20px 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
`;

class Sending_Invitation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emails: "" };
  }

  render() {
    const selectedTags = tags => {
      this.setState(state => {
        return { emails: tags };
      });
    };

    return (
      <ContentDiv>
        <Tag selectedTags={selectedTags} tags={this.props.tags} />
        <AppButton
          color="white"
          background="#3E2689"
          text="Send Invite"
          height="50px"
          width="124px"
          clickAction={e => this.props.handleClick(e, this.state.emails)}
          isLoading={this.props.isLoading}
        />
        {/* <SharedComponents.Button 
				style={{maxHeight:"60px"}} color="white" background="#3E2689" 
				text="Send Invite" onClick={(e) => this.props.handleClick(e, this.state.emails)} /> */}
      </ContentDiv>
    );
  }
}
export default Sending_Invitation;
