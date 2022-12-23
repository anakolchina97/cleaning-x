import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import H3 from './H3';
import Description from './Description';

const CardWorks = ({
  id = 1,
  img = 'item-1.svg',
  title = 'Schedule online',
  description = 'Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.',
  page,
}) => {
  return (
    <CardWorksContainer page={page}>
      <CardWorksImgContainer>
        <CardWorksImg src={require(`../images/works/${img}`)} />
      </CardWorksImgContainer>
      <H3 align="center" mb={16}>
        {id}. {title}
      </H3>
      <Description align="center">{description}</Description>
    </CardWorksContainer>
  );
};

const CardWorksContainer = styled.article`
  max-width: ${(props) => (props.page === 'components' ? rem(374) : 'auto')};
  width: 100%;
`;

const CardWorksImgContainer = styled.div`
  display: flex;
  margin: 0 auto;
  height: ${rem(240)};
  margin-bottom: ${rem(40)};
`;

const CardWorksImg = styled.img`
  width: 100%;
`;

export default CardWorks;
