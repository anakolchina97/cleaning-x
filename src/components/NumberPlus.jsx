import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const NumberPlus = ({ count = 10, description = "Years" }) => {
  return (
    <NumberPlusBox>
      <NumberPlusTop>
        <NumberPlusCount>{count}</NumberPlusCount>
        <NumberPlusIcon>+</NumberPlusIcon>
      </NumberPlusTop>
      <NumberPlusDescription>{description}</NumberPlusDescription>
    </NumberPlusBox>
  );
};

const NumberPlusBox = styled.div``;
const NumberPlusTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rem(3)};
`;
const NumberPlusCount = styled.div`
  font-size: ${rem(54)};
  line-height: 122%;
  font-weight: 700;
  color: #211f54;
`;
const NumberPlusIcon = styled(NumberPlusCount)`
  font-weight: 400;
  color: #0075ff;
  margin-left: ${rem(5)};
`;
const NumberPlusDescription = styled.div`
  font-weight: 700;
  font-size: ${rem(18)};
  line-height: 133%;
  color: #6e7191;
`;

export default NumberPlus;
