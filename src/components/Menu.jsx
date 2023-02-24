import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Link } from "react-router-dom";

const Menu = () => {
  const links = [
    {
      href: "#home",
      name: "Home",
    },
    {
      href: "#works",
      name: "Works",
    },
    {
      href: "#services",
      name: "Services",
    },
    {
      href: "#different",
      name: "Different",
    },
    {
      page: true,
      href: "/components",
      name: "Components",
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const element = e.target.getAttribute("href");
    document.querySelector(element).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <MenuContainer>
      {links.map(({ href, name, page }) => (
        <MenuItem key={name}>
          {page ? (
            <MenuLinkPage to={href}>{name}</MenuLinkPage>
          ) : (
            <MenuLink href={href} onClick={handleClick}>
              {name}
            </MenuLink>
          )}
        </MenuItem>
      ))}
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
  font-weight: 400;
  font-size: ${rem(18)};
  color: ${(props) => props.theme.color.black};
  &:last-child {
    margin-right: 0;
  }
`;

const MenuLink = styled.a`
  color: inherit;
`;

const MenuLinkPage = styled(Link)`
  color: inherit;
`;

export default Menu;
