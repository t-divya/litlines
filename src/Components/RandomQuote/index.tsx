import { Link } from "react-router-dom";
import styled from "styled-components";

type RandomQuoteProps = {
  to: string;
};

const RandomQuoteStyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default function RandomQuote({ to }: RandomQuoteProps) {
  return (
    <RandomQuoteStyledLink to={to}>
      “You have the right to work, but for the work's sake only. You have no
      right to the fruits of work. Desire for the fruits of work must never be
      your motive in working.~Bhagwat Gita
    </RandomQuoteStyledLink>
  );
}
