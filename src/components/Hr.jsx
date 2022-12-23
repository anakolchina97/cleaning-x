import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Hr = () => {
  return <HrBox></HrBox>;
};

const HrBox = styled.div`
  width: 100%;
  height: ${rem(1)};
  background: #dcddeb;
`;

export default Hr;
