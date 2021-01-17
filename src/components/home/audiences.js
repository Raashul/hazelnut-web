import React from "react";
import styled from "styled-components";
import Audience from "../reuseable_components/audience";
import arrow from "../../assests/icons/arrow.png";
import { max_devices } from "../devices.js";

const Container = styled.div`
  display: flex;
  padding: 130px 150px;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 1000px) {
    padding: 130px 50px 0 50px;
  }

  @media ${max_devices.laptopM} {
    flex-direction: column;
    padding: 80px 60px;
    align-items: center;
  }

  @media ${max_devices.tablet} {
    padding: 60px;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 25%;

  flex-direction: column;
  margin-bottom: 40px;

  @media ${max_devices.laptopM} {
    width: 100%;
    align-items: center;
  }
`;

const Header = styled.h2`
  font-size: 200%;
  font-weight: 900;
  margin-bottom: 22px;

  @media ${max_devices.laptopM} {
    & > .display {
      display: none;
    }
  }
`;

const Access = styled.p`
  color: #3e2689;
  font-weight: 600;
  & a {
    color: inherit;
    font-weight: 500;
    line-height: 25px;
    @media ${max_devices.laptopM} {
      & > .display {
        display: none;
      }
    }
  }
`;
const Image = styled.img`
  height: 10px;
  width: auto;
  margin: 3px 5px 0 5px;
  display: inline-block;
`;

const ComponentDiv = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;

  @media ${max_devices.laptopM} {
    width: 100%;
  }

  @media ${max_devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const Audiences = () => {
  return (
    <Container>
      <ContentDiv>
        <Header>
          For Readers <br className="display" />& Learners
        </Header>
        <Access>
          <a href="/#">
            Explore with <br className="display" />
            early access
            <Image src={arrow} />
          </a>
        </Access>
      </ContentDiv>
      <ComponentDiv>
        <Audience className="audience" {...creators} />
        <Audience className="audience" {...writers} />
        <Audience className="audience" {...leaders} />
      </ComponentDiv>
    </Container>
  );
};

// Properties
const creators = {
  name: "creators",
  users: "Creators and Thinkers"
};

const writers = {
  name: "writers",
  users: "Writers and Storytellers"
};

const leaders = {
  name: "leaders",
  users: "Leaders and Entrepreneurs"
};

export default Audiences;
