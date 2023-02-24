import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import { H3Box } from "./H3";
import Button from "./Button";
import Hr from "./Hr";
import Logo from "./Logo";

const footerIcons = ["vk", "twitter", "youtube", "vimeo", "discord"];

const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <FooterInner>
          <FooterTop>
            <FooterTopItem>
              <FooterTopTitle>Quality cleaning for your home</FooterTopTitle>
              <FooterTopDescription mb={33}>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </FooterTopDescription>
              <FooterSquares>
                {footerIcons.map((icon, index) => (
                  <FooterSquare
                    href="#"
                    icon={require(`../images/${icon}.svg`)}
                    key={index}
                    onClick={(e) => e.preventDefault()}
                  />
                ))}
              </FooterSquares>
            </FooterTopItem>
            <FooterTopItem>
              <FooterTopMiniTitle>Contact us</FooterTopMiniTitle>
              <FooterTopDescription mb={12}>
                1827 Nickel Road, Los Angeles, CA, 90017, United States
              </FooterTopDescription>
              <FooterTopDescription mb={12}>
                (414) 567 - 2109
              </FooterTopDescription>
              <FooterTopDescription>contact@cleaning.com</FooterTopDescription>
            </FooterTopItem>
            <FooterTopItem>
              <FooterTopMiniTitle>Hours</FooterTopMiniTitle>
              <FooterTopMiniSubtitle>Monday to Friday</FooterTopMiniSubtitle>
              <FooterTopDescription mb={17}>
                6:00 AM - 9:00 PM
              </FooterTopDescription>
              <FooterTopMiniSubtitle>
                Saturday &amp; Sunday
              </FooterTopMiniSubtitle>
              <FooterTopDescription>6:00 AM - 9:00 PM</FooterTopDescription>
            </FooterTopItem>
            <FooterTopItem>
              <FooterTopMiniTitle>Get a free estimate</FooterTopMiniTitle>
              <FooterTopItemPhone href={"tel:4145672109"}>
                (414) 567 - 2109
              </FooterTopItemPhone>
              <FooterTopDescription mb={18}>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </FooterTopDescription>
              <Button text="Request a free quote" />
            </FooterTopItem>
          </FooterTop>
          <Hr />
          <FooterBottom>
            <Logo />
            <FooterBottomCopyright>
              Copyright © Cleaning X | Dev by{" "}
              <FooterBottomCopyrightLink
                href={"https://github.com/anakolchina97"}
                target={"_blank"}
              >
                Anna Kolchina
              </FooterBottomCopyrightLink>
            </FooterBottomCopyright>
          </FooterBottom>
        </FooterInner>
      </Container>
    </FooterBox>
  );
};

const FooterBox = styled.footer`
  padding-top: ${rem(157)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-top: ${rem(80)};
  }
`;
const FooterInner = styled.div``;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${rem(40)};
  margin-bottom: ${rem(139)};
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(auto-fit, minmax(${rem(312)}, auto));
  }
`;
const FooterTopItem = styled.div``;

const FooterTopTitle = styled(H3Box)`
  margin-bottom: ${rem(7)};
`;
const FooterTopDescription = styled.div`
  margin-bottom: ${(props) => rem(props.mb)};
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 167%;
  color: #6e7191;
`;

const FooterSquares = styled.div`
  display: flex;
  gap: ${rem(16)};
`;

const FooterSquare = styled.a`
  width: ${rem(36)};
  height: ${rem(36)};
  border-radius: ${rem(8)};
  background: url(${(props) => `${props.icon}`}) no-repeat center center;
`;

const FooterTopMiniTitle = styled.h6`
  margin-bottom: ${rem(30)};
  font-weight: 700;
  font-size: ${rem(20)};
  line-height: 110%;
`;

const FooterTopMiniSubtitle = styled.h6`
  margin-bottom: ${rem(8)};
  font-weight: 700;
  font-size: ${rem(20)};
  line-height: 110%;
`;

const FooterTopItemPhone = styled.a`
  margin-bottom: ${rem(6)};
  font-weight: 700;
  font-size: ${rem(28)};
  line-height: 129%;
  color: #0075ff;
`;

const FooterBottom = styled.div`
  padding: ${rem(40)} 0;
  display: flex;
  gap: ${rem(40)};
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const FooterBottomCopyright = styled.div`
  font-size: ${rem(18)};
  line-height: 167%;
  text-align: right;
  color: #6e7191;
`;

const FooterBottomCopyrightLink = styled.a`
  font-size: ${rem(18)};
  line-height: 167%;
  text-align: right;
  color: #0075ff;
  text-decoration: underline;
`;

export default Footer;
