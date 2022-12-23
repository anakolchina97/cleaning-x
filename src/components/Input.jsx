import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Input = ({ label = 'Full name', page }) => {
  return (
    <InputBox page={page}>
      <InputLabel>
        <InputLabelText>{label}</InputLabelText>
        <InputForm />
      </InputLabel>
    </InputBox>
  );
};

const InputBox = styled.div`
  width: ${(props) => (props.page === 'components' ? rem(259) : '100%')};
`;

const InputLabel = styled.label``;
export const InputLabelText = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 167%;
  color: #211f54;
  margin-bottom: ${rem(12)};
`;
const InputForm = styled.input`
  background: #ffffff;
  border: ${rem(1)} solid #eff0f6;
  box-shadow: 0 ${rem(2)} ${rem(12)} rgba(20, 20, 43, 0.08);
  border-radius: ${rem(16)};
  height: ${rem(72)};
  width: 100%;
  padding: ${rem(20)};
  font-size: ${rem(18)};
  line-height: 167%;
  &::placeholder {
    color: #6e7191;
  }
`;

export default Input;
