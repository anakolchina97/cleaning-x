import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const CartCount = ({ mr }) => {
  return <CartCountContainer mr={mr}>Cart (0)</CartCountContainer>;
};

const CartCountContainer = styled.span`
  font-weight: 400;
  font-size: ${rem(18)};
  color: ${(props) => props.theme.color.black};
  flex-shrink: 0;
  margin-right: ${(props) => rem(props.mr)};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export default CartCount;
