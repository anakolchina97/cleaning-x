import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import H2 from "./H2";
import Description from "./Description";
import Check from "./Check";
import Button from "./Button";
import { useEffect } from "react";
import { useState } from "react";
import db from "../db.json";

const Office = () => {
  const [officeChecks, setOfficeChecks] = useState([]);

  useEffect(() => {
    setOfficeChecks(db["officeChecks"]);
  }, []);

  return (
    <OfficeBox>
      <Container>
        <OfficeInner>
          <OfficeImg src={require("../images/office.svg").default} />
          <OfficeText>
            <H2 mb={19}>
              We&nbsp;cover all areas of&nbsp;your home or&nbsp;office
            </H2>
            <Description mb={26}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Description>
            <OfficeChecks>
              {officeChecks.map((item, index) => (
                <Check text={item} key={index} />
              ))}
            </OfficeChecks>
            <Button text="Get a free quote" />
          </OfficeText>
        </OfficeInner>
      </Container>
    </OfficeBox>
  );
};

const OfficeBox = styled.section`
  margin-bottom: ${rem(200)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-bottom: ${rem(100)};
  }
`;

const OfficeInner = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(80)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-wrap: wrap;
  }
`;
const OfficeImg = styled.img`
  width: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    order: 1;
    max-width: ${rem(640)};
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    margin: 0 auto;
  }
`;

const OfficeText = styled.div``;

const OfficeChecks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${rem(175)});
  margin-bottom: ${rem(48)};
  gap: ${rem(24)};
`;

export default Office;
