import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Icons = ({ children }) => {
  return <IconsBox>{children}</IconsBox>;
};

const IconsBox = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${rem(115)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${rem(50)} ${rem(80)};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${rem(50)} ${rem(45)};
  }
`;

export default Icons;
