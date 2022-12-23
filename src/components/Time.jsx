import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Time = ({ children }) => {
  return <TimeBox>{children}</TimeBox>;
};

const TimeBox = styled.time`
  font-weight: 700;
  font-size: ${rem(18)};
  line-height: 111%;
`;

export default Time;
