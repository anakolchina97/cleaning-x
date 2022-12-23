import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import { H2Box } from "./H2";
import { DescriptionBox } from "./Description";
import { useState } from "react";
import { useEffect } from "react";
import NumberPlus from "./NumberPlus";
import Button from "./Button";
import Hr from "./Hr";
import db from "../db.json";

const What = () => {
  const [numbersPlus, setNumbersPlus] = useState([]);

  useEffect(() => {
    setNumbersPlus(db["numberPlus"]);
  }, []);

  return (
    <WhatBox>
      <Container>
        <WhatInner>
          <WhatText>
            <WhatTitle>What makes us different?</WhatTitle>
            <WhatDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </WhatDescription>
            <WhatDescription>
              Lorem ipsum dolor sit amet, consectetur.
            </WhatDescription>
            <WhatPlus>
              {numbersPlus.map(({ count, description }, index) => (
                <NumberPlus
                  count={count}
                  description={description}
                  key={index}
                />
              ))}
            </WhatPlus>
            <Button text="Get a free quote" />
          </WhatText>
          <WhatImg src={require("../images/what.svg").default} />
        </WhatInner>
        <Hr />
      </Container>
    </WhatBox>
  );
};

const WhatBox = styled.section``;

const WhatInner = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(20)};
  margin-bottom: ${rem(200)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-bottom: ${rem(100)};
    flex-wrap: wrap;
  }
`;

const WhatText = styled.div``;

const WhatImg = styled.img`
  width: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    margin: 0 auto;
  }
`;

const WhatTitle = styled(H2Box)`
  margin-bottom: ${rem(19)};
`;
const WhatDescription = styled(DescriptionBox)`
  margin-bottom: ${rem(27)};
`;

const WhatPlus = styled.div`
  display: flex;
  gap: ${rem(40)};
  margin-bottom: ${rem(48)};
`;

export default What;
