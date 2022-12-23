import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Icon = ({
  icon = 'icon-2.svg',
  title = 'clients',
  count = '3,480+',
  tel = false,
  color = 'black',
}) => {
  return (
    <IconContainer>
      <IconIconContainer>
        <IconIcon src={require(`../images/icons/${icon}`)} alt="Icon" />
      </IconIconContainer>
      <IconTextContainer>
        <IconTitle color={color}>{title}</IconTitle>
        <IconDescription color={color}>
          {tel ? (
            <IconLink href={tel} rel="noopener noreferrer" color={color}>
              (414) 567 - 2109
            </IconLink>
          ) : (
            count
          )}
        </IconDescription>
      </IconTextContainer>
    </IconContainer>
  );
};

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${rem(16)};
`;

const IconIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(72)};
  height: ${rem(72)};
`;

const IconIcon = styled.img`
  width: 100%;
  filter: drop-shadow(0px 4px 10px rgba(20, 20, 43, 0.04));
`;

const IconTextContainer = styled.div``;

const IconTitle = styled.h5`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 112%;
  letter-spacing: ${rem(1.6)};
  text-transform: uppercase;
  color: ${(props) =>
    props.color === 'white' ? props.theme.color.white : props.theme.color.description};
  margin-bottom: ${rem(4)};
`;

const fontStyles = css`
  font-weight: 700;
  font-size: ${rem(28)};
  line-height: 129%;
`;

const IconDescription = styled.h3`
  ${fontStyles};
  color: ${(props) => props.theme.color.black};
`;

const IconLink = styled.a`
  ${fontStyles};
  color: ${(props) =>
    props.color === 'white' ? props.theme.color.white : props.theme.color.black};
`;

export default Icon;
