import React from "react";
import styled from "styled-components";

const Container = styled.button`
	border-radius: 4px;
  display:flex;
  flex-direction: row;
	background-color: #F3F4F8;
	align-items: center;
	padding: 5px 10px;
  margin-right: 15px;
  outline: none;
`;

const Image = styled.img`
  height: 20px;
	width: 20px;
	margin-right: 3px;
`;

const Message = styled.div`
	font-size: 70%;
`;

const Media = props => {
  return(
    <Container>
      <Image src={props.link}/>
      <Message>{props.text}</Message>
    </Container>
  );
};

export default Media;
