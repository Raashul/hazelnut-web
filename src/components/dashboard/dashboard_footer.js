import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    margin-bottom: 30px;
`
const TextField = styled.div`
    color: #B1B1B1;
    font-size: 14px;
    padding-right: 30px;
`
const FooterDash = (props)=>{
    return (
        <Container>
          <TextField>  About </TextField>
          <TextField><a href="/privacy">  Privacy Policy </a></TextField>
          <TextField><a href="/terms">  Terms of Use </a></TextField>
        </Container>
    )
}

export default FooterDash
