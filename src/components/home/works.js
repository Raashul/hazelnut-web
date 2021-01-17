import React from "react";
import styled from "styled-components";
import Work from "../reuseable_components/work";
import { max_devices } from "../devices.js";

const Container = styled.div`
  display: flex;
  padding: 40px 150px 100px 150px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 20px 50px 80px 50px;
  }

  @media ${max_devices.tablet} {
    flex-direction: column;
    align-items: center;
    padding: 40px 45px;
  }
`;

const Header = styled.h2`
  display: flex;
  font-size: 265%;
  margin-bottom: 65px;
  font-weight: 900;

  @media ${max_devices.laptopM} {
    width: 100%;
  }
`;

const ComponentDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media ${max_devices.tablet} {
    padding: 40px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media ${max_devices.laptopM} {
    justify-content: center;
  }
`;

const Works = () => {
  return (
    <Container>
      <div className="header">
        <Header>How it Works</Header>
      </div>
      <ComponentDiv>
        <Work {...capture}></Work>
        <Work {...organise}></Work>
        <Work {...remember}></Work>
      </ComponentDiv>
    </Container>
  );
};

const capture = {
  image: "book-work",
  header: "Capture",
  text:
    "Capture pages and highlight texts from your favorite books. Hazelnut converts the pages or highlights into searchable text."
};

const organise = {
  image: "organise-work",
  header: "Organise",
  text: "Hazelnut allows you to organize your notes into titles and buckets."
};

const remember = {
  image: "reminder-work",
  header: "Remember",
  text:
    "Store locally or share online and set customised reminders for your notes."
};

export default Works;
