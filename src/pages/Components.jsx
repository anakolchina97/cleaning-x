import React from "react";
import Button from "../components/Button";
import Buttons from "../components/Buttons";
import CardArticle from "../components/CardArticle";
import CardProfessional from "../components/CardProfessional";
import CardWorks from "../components/CardWorks";
import Description from "../components/Description";
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";
import H4 from "../components/H4";
import Icon from "../components/Icon";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import styled from "styled-components";
import { rem } from "polished";
import Container from "src/components/Container";
import Video from "src/components/Video";
import Check from "src/components/Check";
import NumberPlus from "src/components/NumberPlus";
import Input from "src/components/Input";

const Components = () => {
  return (
    <Container>
      <ComponentsRow>
        <ComponentsLabel>Buttons</ComponentsLabel>
        <Buttons>
          <Button text="Get a free quote" />
          <Button full={false} text="Explore services" />
        </Buttons>
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Button Small</ComponentsLabel>
        <Button size="small" text="Get a free quote" />
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Logo</ComponentsLabel>
        <Logo />
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Number Plus</ComponentsLabel>
        <NumberPlus />
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Input</ComponentsLabel>
        <Input page={"components"} />
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Check</ComponentsLabel>
        <Check />
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Menu</ComponentsLabel>
        <Menu />
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Headings</ComponentsLabel>
        <H1>H1</H1>
        <H2>H2</H2>
        <H3>H3</H3>
        <H4>H4</H4>
        <Description>Description</Description>
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Icons + Text</ComponentsLabel>
        <Icon img={require("../images/icons/icon-2.svg").default} />
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Video</ComponentsLabel>
        <Video />
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Card Works</ComponentsLabel>
        <CardWorks page={"components"} />
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Card Professional</ComponentsLabel>
        <CardProfessional page={"components"} />
      </ComponentsRow>
      <ComponentsRow>
        <ComponentsLabel>Card Article</ComponentsLabel>
        <CardArticle page={"components"} />
      </ComponentsRow>
    </Container>
  );
};

const ComponentsRow = styled.div`
  margin-bottom: ${rem(40)};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    &:first-child {
      padding-top: ${rem(89)};
    }
  }
`;

const ComponentsLabel = styled.p`
  margin-bottom: ${rem(20)};
  font-weight: 700;
  text-transform: uppercase;
  font-size: ${rem(14)};
`;

export default Components;
