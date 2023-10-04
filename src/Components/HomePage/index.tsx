import styled from "styled-components";
import Heading from "../Heading";
import SearchBox from "../SearchBox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  height: 100vh;
  box-sizing: border-box;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Heading></Heading>
      <SearchBox></SearchBox>
    </Wrapper>
  );
}
