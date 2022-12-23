import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const H3 = ({ children, align = 'left', mb = 0 }) => {
  return (
    <H3Box align={align} mb={mb}>
      {children}
    </H3Box>
  );
};

export const H3Box = styled.h3`
  font-weight: 700;
  font-size: ${rem(28)};
  line-height: 129%;
  color: ${(props) => props.theme.color.black};
  ${(props) => {
    if (props.align === 'center') {
      return `
          text-align: center;
        `;
    }
  }}
  margin-bottom: ${(props) => `${props.mb}px`};
`;

export default H3;
