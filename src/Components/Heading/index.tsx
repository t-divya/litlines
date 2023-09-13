import styled from "styled-components";

const StyledTitleContainer = styled.div`

`
const StyledTitle = styled.h1`
margin:0;
font-size: 2.7em;
text-align:center;
color:white
`;

export default function Heading() {
    return (
        <StyledTitleContainer>
            <StyledTitle>LitLines</StyledTitle>
        </StyledTitleContainer>)
}