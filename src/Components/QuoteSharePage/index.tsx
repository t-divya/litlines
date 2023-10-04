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
  background-color: ${(props) => props.bgColor};
  border: 2px solid black;
  margin-right: 10px;
`;

const QuoteFormatButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActionButton = styled.button`
  border: 2px solid black;
  cursor: pointer;
`;

const BG_COLOR_LIST = [
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

export default function QuoteSharePage() {
  const [bgColor, setBgColor] = useState(BG_COLOR_LIST[0]);

  function handleOnChangeBgColor() {
    let val = BG_COLOR_LIST.indexOf(bgColor);
    setBgColor(BG_COLOR_LIST[(val + 1) % BG_COLOR_LIST.length]);
  }

  return (
    <FormatQuoteWrapper>
      <QuotedText bgColor={bgColor}>
        “You have the right to work,but for the work's sake only. <br></br>You
        have no right to the fruits of work. Desire for the <br></br>fruits of
        work must never be your motive in working.<br></br>~Bhagwat Gita
      </QuotedText>
      <QuoteFormatButtons>
        <ActionButton>text</ActionButton>
        <ActionButton onClick={handleOnChangeBgColor}>color</ActionButton>
        <ActionButton>forward</ActionButton>
      </QuoteFormatButtons>
    </FormatQuoteWrapper>
  );
}
