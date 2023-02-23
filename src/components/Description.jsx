import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Description = ({ children, align, mb }) => {
  return (
    <DescriptionBox align={align} mb={mb}>
      {children}
    </DescriptionBox>
  );
};

export const DescriptionBox = styled.p`
  max-width: ${rem(702)};
  width: 100%;
  font-weight: 400;
  font-size: ${rem(21)};
  line-height: 143%;
  color: ${(props) => props.theme.color.description};
  ${(props) => {
    if (props.align === "center") {
      return `
          text-align: center;
          margin: 0 auto;
        `;
    }
  }}
  margin-bottom: ${(props) => rem(props.mb)};
`;

export default Description;
