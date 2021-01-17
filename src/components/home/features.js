import React from "react";
import styled from "styled-components";
import Feature from "../reuseable_components/feature";
import { max_devices } from "../devices.js";
import arrow from "../../assests/icons/arrow_white.svg";

const Container = styled.div`
  display: flex;
  padding: 150px;
  background-color: #3e2689;

  @media ${max_devices.laptopM} {
    flex-direction: column-reverse;
  }

  @media ${max_devices.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    padding: 40px 45px;
  }
`;

const Header = styled.h2`
  color: #ffffff;
  font-size: 200%;
  font-weight: 800;

  @media ${max_devices.laptopM} {
    & > .display {
      display: none;
    }
  }
`;

const ContentDiv = styled.div`
display:flex;
flex-direction: column
width: 20%;
margin-bottom: 40px;

  
  @media ${max_devices.laptopM} {
    width: 100%;
  }

  @media ${max_devices.tablet} {
    justify-content: center;
    align-items: center;
  }

}
`;

const Access = styled.p`
  color: #ffffff;
  
  & a{
    color:inherit;
    font-weight: 500;
    line-height: 25px;

    @media ${max_devices.laptopM} {
      & > .display {
        display: none;
      }
    }
  }
`;

const ComponentDiv = styled.div`
  display: flex;
  width: 80%;


  @media ${max_devices.laptopM}{  
    justify-content: center;
    width: 100%;
  }

  @media ${max_devices.tablet} {
    padding: 20px
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
  }

`;
const Image = styled.img`
    height: 15px; 
    width: auto;
    margin: 3px 5px 0 5px;
    display: inline-block;


`;
const Features = () => {
  return (
    <Container>
      <ComponentDiv>
        <Feature class="props" {...books}></Feature>
        <Feature {...capture_highlight}></Feature>
        <Feature {...highlight_capture}></Feature>
      </ComponentDiv>
      <ContentDiv>
        <Header>
          Store your <br className="display" />
          notes easily
        </Header>
        <Access> 
          <a href="/" > Experience with <br className="display" /> early access <Image src={arrow}/></a>
        </Access>
      </ContentDiv>
    </Container>
  );
};

//Properties
const books = {
  image: "book",
  header: "Capture",
  text:
    "Capture pages from your favorite books. Hazelnut converts them into text and allows you to easily search through them."
};

const capture_highlight = {
  image: "capture-highlight",
  header: "Capture and Highlight",
  text:
    "Use a digital higlighter to mark text from your books. Hazelnut converts the highlighted portion into searchable text."
};

const highlight_capture = {
  image: "highlight-capture",
  header: "Highlight and Capture",
  text:"Hazelnut identifies highlights from your pages and converts them into searchable text."
};

export default Features;
