import React from 'react'; 
import styled from 'styled-components'; 
import hazelnutOcr from '../../assests/icons/hazelnut_ocr.png';

const Container = styled.div`
    margin-top: 1.5%;
    margin-bottom: 1.5%;
    background-color: white; 
    width: 100%;
    height: auto; 
`;

const ImageContainer = styled.div`
    width: 250px; 
    height: auto;
    margin-left: 8%;

    &:hover {
        cursor: pointer;
    }
`;

const Logo = styled.img`
    max-width: 100%; 
    width: 45%;
`;

const OcrNav = (props) => {
    return(
        <Container>
            <ImageContainer onClick={() => props.goto('/')}>
                <Logo src= {hazelnutOcr} />
            </ImageContainer>
        </Container>
    );
}

export default OcrNav; 