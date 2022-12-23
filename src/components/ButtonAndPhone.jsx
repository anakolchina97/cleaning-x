import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Button from "./Button";
import Icon from "./Icon";

const ButtonAndPhone = ({ color, removeButtonMobile = false }) => {
  return (
    <ButtonAndPhoneBox>
      <Button removeButtonMobile={removeButtonMobile} text="Get a free quote" />
      <Icon
        img={require("../images/icons/icon-2.svg").default}
        title="Call us now"
        description="(414) 567 - 2109"
        tel="tel:4145672109"
        color={color}
      />
    </ButtonAndPhoneBox>
  );
};

const ButtonAndPhoneBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${rem(28)};
`;

export default ButtonAndPhone;
