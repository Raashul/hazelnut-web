import React from "react";
import styled from "styled-components";
import medal from "../../assests/icons/medal.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  border: 1px solid rgba(64, 10, 113, 0.1);
  border-radius: 8px;
  background-color: rgba(248, 246, 255, 0.55);
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const TextField = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`;
const Image = styled.img`
  height: 40px;
  width: auto;
  margin-right: 30px;
  margin-top: 10px;

  @media (max-width: 900px) {
    margin-right: 0px;
  }
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 900px) {
    justify-items: space-between;
  }
`;

class Rank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Image src={medal} />
        <TextField>
          <span style={{ fontWeight: "900", fontSize: "200%" }}>
            {this.props.response.dashboardInfo.points}
          </span>
          <span style={{ fontSize: "14px" }}>
            Your rank is &nbsp;
            <span style={{ fontSize: "14px", color: "#3E2689" }}>
              {this.props.response.dashboardInfo.rank}
            </span>  &nbsp;
            on the waitlist out of total &nbsp;
            <span style={{ fontSize: "14px", color: "#3E2689" }}>
              {this.props.response.total_users_available}.
            </span>
          </span>
          <Horizontal>
            <Vertical>
              <span
                style={{
                  fontWeight: "900",
                  fontSize: "100%",
                  marginBottom: "5px"
                }}
              >
                {this.props.response.dashboardInfo.total_invites}
              </span>
              <span style={{ fontSize: "14px" }}>
                Total Invites <br /> Sent
              </span>
            </Vertical>
            <Vertical>
              <span
                style={{
                  fontWeight: "900",
                  fontSize: "100%",
                  marginBottom: "5px"
                }}
              >
                {this.props.response.dashboardInfo.total_users_accepted}
              </span>
              <span style={{ fontSize: "14px" }}>
                Total Referrals <br /> Completed
              </span>
            </Vertical>
          </Horizontal>
        </TextField>
      </Container>
    );
  }
}

export default Rank;
