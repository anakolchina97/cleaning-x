import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Button = ({ full = true, size = "small", text = "Button" }) => {
  return (
    <ButtonContainer full={full} size={size}>
      {text && <span>{text}</span>}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  color: ${(props) =>
    props.full ? props.theme.color.white : props.theme.color.black};
  background: ${(props) =>
    props.full ? props.theme.color.primary : props.theme.color.transparent};
  border: ${rem(1)} solid
    ${(props) => (props.full ? "transparent" : props.theme.color.grey)};
  border-radius: ${rem(14)};
  font-size: ${(props) =>
    props.size === "large" ? `${rem(18)}` : `${rem(16)}`};
  line-height: ${rem(18)};
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: ${(props) =>
    props.size === "large" ? `${rem(26)} ${rem(42)}` : `${rem(17)} ${rem(27)}`};
  box-shadow: ${(props) =>
    props.full ? "none" : "0px 4px 10px rgba(20, 20, 43, 0.04)"};
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.white};
    background: #0069e4;
    box-shadow: none;
    transition: background 200ms linear;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: ${(props) => (props.mobile ? "100%" : "auto")};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) =>
      props.size === "large" ? `${rem(26)}` : `${rem(17)} ${rem(27)}`};
    display: ${(props) => (props.removeButtonMobile ? "none" : "block")};
  }
`;

export default Button;
