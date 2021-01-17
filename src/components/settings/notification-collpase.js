import React from "react";
import styled from "styled-components";
import ToggleSwitch from "../reuseable_components/toggleswitch";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  flex-direction: row;
  padding: 20px 0px 0px 0px;
`;

const Content = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-bottom: 18px;
`;

const Head = styled.p`
  font-size: 77%;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Paragraph = styled.p`
  max-width: 540px;
  color: #91969e;
  font-size: 77%;
`;

const CollapsibleNotification = props => {
  return (
    <Container>
      <Content>
        <Head>{props.head}</Head>
        <Paragraph>{props.paragraph}</Paragraph>
      </Content>
      <div
        style={{
          width: "10%"
        }}
      >
        <ToggleSwitch />
      </div>
    </Container>
  );
};

export default CollapsibleNotification;
