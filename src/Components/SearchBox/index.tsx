import styled from "styled-components";

import RandomQuote from "../RandomQuote";

const StyledSearchBox = styled.input`
  height: 100%;
  width: 500px;
  padding: 6px;
  border: none;
  border-radius: 20px;
`;
const SearchBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// const SearchIconContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

const RandomQuoteContainer = styled.div`
  margin-top: 50px;
  color: white;
  cursor: pointer;
`;

export default function SearchBox() {
  return (
    <SearchBoxWrapper>
      <StyledSearchBox type="text"></StyledSearchBox>
      <RandomQuoteContainer>
        <RandomQuote to="/quote-share-page"></RandomQuote>
      </RandomQuoteContainer>
    </SearchBoxWrapper>
  );
}
