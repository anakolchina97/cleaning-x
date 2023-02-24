import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Button from "./Button";
import { H2Box } from "./H2";
import { DescriptionBox } from "./Description";
import CardArticle from "./CardArticle";
import { useEffect } from "react";
import { useState } from "react";
import db from "../db.json";

const Articles = () => {
  const [articlesCards, setArticlesCards] = useState([]);

  useEffect(() => {
    setArticlesCards(db["articlesCards"]);
  }, []);

  return (
    <ArticlesBox data-animation>
      <Container>
        <ArticlesTop>
          <ArticlesTitles>
            <ArticlesTitle>Articles &amp; resources</ArticlesTitle>
            <ArticlesDescription>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </ArticlesDescription>
          </ArticlesTitles>
          <ArticlesButtons>
            <Button text="Get a free quote" />
            <Button full={false} text="Browse articles" />
          </ArticlesButtons>
        </ArticlesTop>
        <ArticlesCards>
          {articlesCards.map((props, index) => (
            <CardArticle {...props} key={index} />
          ))}
        </ArticlesCards>
      </Container>
    </ArticlesBox>
  );
};

const ArticlesBox = styled.section`
  padding: ${(props) => rem(props.theme.padding.desktop)} 0;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: ${(props) => rem(props.theme.padding.mobile)} 0;
  }
`;
const ArticlesTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rem(24)};
  flex-wrap: wrap;
  gap: ${rem(24)};
`;
const ArticlesTitles = styled.div`
  max-width: ${rem(474)};
  @media (max-width: 1011px) {
    max-width: 100%;
  }
`;
const ArticlesTitle = styled(H2Box)`
  margin-bottom: ${rem(9)};
`;
const ArticlesDescription = styled(DescriptionBox)``;

const ArticlesButtons = styled.div`
  display: flex;
  gap: ${rem(28)};
`;
const ArticlesCards = styled.div`
  display: flex;
  gap: ${rem(28)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-wrap: wrap;
  }
`;

export default Articles;
