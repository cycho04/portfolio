import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const StyledContainer = styled(Container)`
    color: rgba(255,255,255, 0.9);
    text-align: center;
    height: auto;
    min-height: 450px;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 3rem;
`

const StyledTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 400;
`

const StyledText = styled.p`

`


const Intro = () => {
    return(
        <StyledContainer>
            <StyledTitle>Portfolio Classic</StyledTitle>
            <StyledText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </StyledText>
        </StyledContainer>
    )
}

export default Intro;