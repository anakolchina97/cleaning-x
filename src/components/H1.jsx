import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const H1 = ({ children, mb }) => {
  return <H1Container mb={mb}>{children}</H1Container>;
};

const H1Container = styled.h1`
  font-weight: 700;
  font-size: ${rem(68)};
  line-height: 109%;
  color: ${(props) => props.theme.color.black};
  margin-bottom: ${(props) => `${props.mb}px`};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${rem(48)};
  }
`;

export default H1;
