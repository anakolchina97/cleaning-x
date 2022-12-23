import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Check = ({ text = 'Bathrooms' }) => {
  return (
    <CheckBox>
      <CheckIcon />
      <CheckText>{text}</CheckText>
    </CheckBox>
  );
};

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
`;
const CheckIcon = styled.div`
  width: ${rem(26)};
  height: ${rem(26)};
  border-radius: 50%;
  background: #edf5ff
    url("data:image/svg+xml,%3Csvg width='14' height='12' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.11682 6.84062L4.4786 10.2024L12.8832 1.79785' stroke='%230075FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
    no-repeat center center;
  background-size: ${rem(14)} ${rem(12)};
`;

const CheckText = styled.div`
  font-weight: 700;
  font-size: ${rem(18)};
`;

export default Check;
