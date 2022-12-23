import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <MenuLink to="/">Home</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/about">About</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/services">Services</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/pages">Pages</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/components">Components</MenuLink>
      </MenuItem>
    </MenuContainer>
  );
};

const MenuContainer = styled.ul`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: ${rem(22)};
  &:last-child {
    margin-right: 0;
  }
`;

const MenuLink = styled(Link)`
  font-weight: 400;
  font-size: ${rem(18)};
  color: ${(props) => props.theme.color.black};
`;

export default Menu;
