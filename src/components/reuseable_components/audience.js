import React from "react";
import styled from "styled-components";
import { max_devices } from "../devices";

const Rectangle = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  max-width: 270px;

  @media (max-width: 900px) {
    max-width: 200px;
  }

  @media ${max_devices.tablet} {
    max-width: 270px;
    margin-bottom: 40px;
  }
`;

const Description = styled.p`
  color: #1a1a1a;
  font-size: 100%;
  font-weight: 300;
  align-items: center;
`;

const Image = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: auto;
`;

const Audience = props => {
  return (
    <Rectangle>
      <div>
        <Image src={require("../../assests/images/" + props.name + ".png")} />
      </div>
      <Description> {props.users}</Description>
    </Rectangle>
  );
};

export default Audience;
