import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  border-radius: 4px;
  background-color: #f3f4f8;
  padding: 10px;
  margin-right: 10px;

  & > .link {
    color: #91969e;
    font-size: 75%;
  }
`;

class CustomLink extends React.Component {
  render() {
    return (
      <Container>
        <Box>
          <span className="link">
            https://hazelnut-web.herokuapp.com/{this.props.referral_id}
          </span>
        </Box>
        <span
          onClick={() => {
            navigator.clipboard.writeText(
              `https://hazelnut-web.herokuapp.com/${this.props.referral_id}`
            );
          }}
          style={{
            color: "#3E2689",
            "font-size": "75%",
            "font-weight": "500",
            cursor: "pointer"
          }}
        >
          Copy
        </span>
      </Container>
    );
  }
}
export default CustomLink;
