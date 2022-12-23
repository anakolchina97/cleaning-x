import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { InputLabelText } from './Input';

const Textarea = () => {
  return (
    <TextareaBox>
      <TextareaLabel>
        <TextareaLabelText>Add a note</TextareaLabelText>
        <TextareaForm></TextareaForm>
      </TextareaLabel>
    </TextareaBox>
  );
};

const TextareaBox = styled.div`
  width: 100%;
`;
const TextareaLabel = styled.label``;
const TextareaLabelText = styled(InputLabelText)``;
const TextareaForm = styled.textarea`
  width: 100%;
  background: ${(props) => props.theme.color.white};
  border: ${rem(1)} solid #eff0f6;
  box-shadow: 0 ${rem(2)} ${rem(7)} rgba(20, 20, 43, 0.08);
  border-radius: ${rem(22)};
  min-height: ${rem(144)};
  resize: vertical;
  padding: ${rem(20)};
  font-size: ${rem(18)};
  line-height: 167%;
`;

export default Textarea;
