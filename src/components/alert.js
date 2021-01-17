import React from "react";
import styled from "styled-components";

const AppAlertDiv = styled.div`
  height: 40px;
  width: 280px;
  background-color: rgba(255, 89, 89, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 20px 10px;
`;

export const AppAlert = props => {
  return (
    <AppAlertDiv>
      <p style={{ fontSize: 12, color: "red", fontFamily: "Avenir" }}>
        {props.msg}
      </p>
    </AppAlertDiv>
  );
};
