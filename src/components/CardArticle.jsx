import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import H4 from './H4';
import { DescriptionBox } from './Description';
import convertDate from 'src/utils/convertDate';
import Time from './Time';

const CardArticle = ({
  img = 'images/article/item-1.png',
  title = '8 best vacuum cleaners to clean any mess for your home in 2022',
  description = 'Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.',
  time = 'Jan 28, 2022',
  page,
}) => {
  return (
    <CardArticleContainer page={page}>
      <CardArticleImgContainer>
        <CardArticleImg src={require(`../images/article/${img}`)} alt="img" />
      </CardArticleImgContainer>
      <CardArticleTextWrap>
        <CardArticleTextContainer>
          <H4 mb={17}>{title}</H4>
          <CardArticleDescription>{description}</CardArticleDescription>
          <CardArticleTextFooter>
            <Time>{convertDate(time)}</Time>
            <CardArticleTextLink href="#">
              <CardArticleIcon src={require('../images/arrow-right.svg').default} />
            </CardArticleTextLink>
          </CardArticleTextFooter>
        </CardArticleTextContainer>
      </CardArticleTextWrap>
    </CardArticleContainer>
  );
};

const CardArticleContainer = styled.article`
  max-width: ${(props) => (props.page === 'components' ? rem(596) : 'auto')};
  width: 100%;
`;

const CardArticleImgContainer = styled.div``;

const CardArticleTextWrap = styled.div`
  padding: ${rem(30)};
  margin-top: ${rem(-95)};
  position: relative;
`;

const CardArticleImg = styled.img`
  width: 100%;
`;

const CardArticleTextContainer = styled.section`
  padding: ${rem(50)};
  border: ${rem(1)} solid ${(props) => props.theme.color.grey};
  box-shadow: 0 ${rem(2)} ${rem(6)} rgba(20, 20, 43, 0.04);
  border-radius: ${rem(24)};
  background: ${(props) => props.theme.color.white};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${rem(25)};
  }
`;

const CardArticleTextFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardArticleTextLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(50)};
  height: ${rem(50)};
  background: ${(props) => props.theme.color.primary};
  font-size: ${rem(30)};
  text-decoration: none;
  border-radius: ${rem(10)};
  transition: background 200ms linear;
  &:hover {
    color: ${(props) => props.theme.color.white};
    background: #0069e4;
    box-shadow: none;
    transition: background 200ms linear;
  }
`;

const CardArticleIcon = styled.img`
  width: ${rem(30)};
  position: relative;
  left: ${rem(2)};
`;

const CardArticleDescription = styled(DescriptionBox)`
  margin-bottom: ${rem(15)};
`;

export default CardArticle;
