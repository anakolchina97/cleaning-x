import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const H5 = ({ children }) => {
  return <H5Box>{children}</H5Box>;
};

const H5Box = styled.h5`
  font-weight: 700;
  font-size: ${rem(18)};
  line-height: 111%;
`;

export default H5;
