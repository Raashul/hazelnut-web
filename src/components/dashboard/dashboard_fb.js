import React from "react";
import styled from "styled-components";
import arrow from "../../assests/icons/rightarrow.svg";
import group from "../../assests/images/group.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(64, 10, 113, 0.1);
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.05);

  @media (max-width: 900px) {
    padding: 20px;
    align-items: center;
  }
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;

  & > .text {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  height: 30px;
  width: auto;
  margin-right: 15px;
  margin-left: 5px;
  display: inline-block;
`;

const Group = props => {
  return (
    <Container>
      <a
        href="https://www.facebook.com/groups/usehazelnut"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={group} />
      </a>
      <TextField>
        <span class="text">
          {" "}
          Get the latest updates and be a part of conversations by joining our{" "}
          <br /> facebook community. Joining password -{" "}
          <span style={{ color: "#3E2689", fontWeight: "500" }}> Hazel </span>
        </span>
        <a
          href="https://www.facebook.com/groups/usehazelnut"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="text" style={{ color: "#3E2689", fontWeight: "700" }}>
            {" "}
            Join the facebook group
            <Image src={arrow} style={{ height: "10px", width: "auto" }} />
          </span>
        </a>
      </TextField>
    </Container>
  );
};

export default Group;
