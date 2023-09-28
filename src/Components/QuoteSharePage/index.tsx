import styled from "styled-components";
import { useState } from "react";

interface Props {
  bgColor: string;
}

const FormatQuoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

const QuotedText = styled.div<Props>`
  background: ${(props) => props.bgColor};
  border: 2px solid black;
  margin-right: 10px;
`;

const QuoteFormatButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextButton = styled.button`
  margin-bottom: 5px;
  border: 2px solid black;
  cursor: pointer;
`;
const ColorButton = styled.button`
  margin-bottom: 5px;
  border: 2px solid black;
  cursor: pointer;
`;
const ForwardButton = styled.button`
  border: 2px solid black;
  cursor: pointer;
`;

export default function QuoteSharePage() {
  const bgColorList = [
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
    "black",
  ];

  const [bgColor, setBgColor] = useState(bgColorList[0]);

  function handleOnChangeBgColor() {
    let val = bgColorList.indexOf(bgColor);
    setBgColor(bgColorList[val + 1]);
  }

  return (
    <FormatQuoteWrapper>
      <QuotedText bgColor={bgColor}>
        “You have the right to work,but for the work's sake only. <br></br>You
        have no right to the fruits of work. Desire for the <br></br>fruits of
        work must never be your motive in working.<br></br>~Bhagwat Gita
      </QuotedText>
      <QuoteFormatButtons>
        <TextButton>text</TextButton>
        <ColorButton onClick={handleOnChangeBgColor}>color</ColorButton>
        <ForwardButton>forward</ForwardButton>
      </QuoteFormatButtons>
    </FormatQuoteWrapper>
  );
}
