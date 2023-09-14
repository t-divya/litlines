import styled from "styled-components";
import { useState } from "react";

const StyledSearchBox = styled.input`
  height: 100%;
  width: 500px;
  padding: 6px;
  border: none;
  border-radius: 20px;
`;
const SearchBoxWrapper = styled.div`
display: flex,
flex-items:center
`;
const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function SearchBox() {
  const [inputValue, setInputValue] = useState();
  return (
    <SearchBoxWrapper>
      <StyledSearchBox type="text"></StyledSearchBox>
    </SearchBoxWrapper>
  );
}
