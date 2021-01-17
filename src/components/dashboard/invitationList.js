import React from "react";
import styled from "styled-components";
import SharedComponents from "../reuseable_components/index";

const Container = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(64, 10, 113, 0.1);
  border-radius: 8px;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.05);
  padding: 10px;
  margin: 10px;
  overflow-y: scroll;
  height: 403px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const InfoDiv = styled.div`
  width: 100%;
  margin: 10px 0 0 0;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 900;
`;

const LineDivider = styled.div`
  box-sizing: border-box;
  width: 405px;
  border: 1px solid rgba(145, 150, 158, 0.21);
  margin: auto;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

class Invitation_List extends React.Component {
  render() {
    let elements;
    if (this.props.lists.length == 0) {
      elements = (
        <span style={{ fontFamily: "Avenir", fontSize: 14 }}>
          {" "}
          You have not invited anybody. <br />
        </span>
      );
    } else {
      elements = this.props.lists.map((value, index) => {
        return (
          <>
            {value.status ? (
              <SharedComponents.Email
                accept={value.status}
                email={value.refer_to_email}
              />
            ) : (
              <SharedComponents.Email
                accept={"failed"}
                email={value.refer_to_email}
                errorMsg={value.message}
              />
            )}
            <LineDivider />
          </>
        );
      });
    }

    return (
      <Container>
        <Text>Your Invitations </Text>
        <InfoDiv>{elements}</InfoDiv>
      </Container>
    );
  }
}
export default Invitation_List;
