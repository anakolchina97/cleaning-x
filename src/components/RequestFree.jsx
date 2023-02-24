import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import { H2Box } from "./H2";
import { DescriptionBox } from "./Description";
import Icon from "./Icon";
import Hr from "./Hr";
import { H3Box } from "./H3";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

const RequestFree = () => {
  return (
    <RequestFreeBox data-animation>
      <Container>
        <RequestFreeInner>
          <RequestFreeInfo>
            <RequestFreeTitle>
              Request a free cleaning quote today
            </RequestFreeTitle>
            <RequestFreeDescription>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </RequestFreeDescription>
            <RequestFreeIcon>
              <Icon
                img={require("../images/icons/icon-2.svg").default}
                title="Call us now"
                description="(414) 567 - 2109"
                tel="tel:4145672109"
              />
            </RequestFreeIcon>
            <Hr />
            <RequestFreeBoxSubtitle>Not convinced yet?</RequestFreeBoxSubtitle>
            <RequestFreeDescription>
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </RequestFreeDescription>
            <Button full={false} text="Browse our packages" />
          </RequestFreeInfo>
          <RequestFreeForm>
            <RequestFreeFormField>
              <Input label="Full name" />
              <Input label="Phone number" />
            </RequestFreeFormField>
            <RequestFreeFormField>
              <Input label="Address" />
              <Input label="Email" />
            </RequestFreeFormField>
            <RequestFreeFormField>
              <Input label="Requested service" />
              <Input label="Day of service" />
            </RequestFreeFormField>
            <RequestFreeFormField>
              <Textarea />
            </RequestFreeFormField>
            <Button mobile={true} text="Submit message" />
          </RequestFreeForm>
        </RequestFreeInner>
      </Container>
    </RequestFreeBox>
  );
};

const RequestFreeBox = styled.section`
  background: #f7f9fc;
  padding: ${(props) => rem(props.theme.padding.desktop)} 0;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: ${(props) => rem(props.theme.padding.mobile)} 0;
  }
`;

const RequestFreeInner = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(60)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-wrap: wrap;
  }
`;
const RequestFreeInfo = styled.div``;

const RequestFreeForm = styled.div`
  width: 55%;
  flex-shrink: 0;
  padding: ${rem(85)} ${rem(61)};
  background: ${(props) => props.theme.color.white};
  border: ${rem(1)} solid #eff0f6;
  box-shadow: 0 ${rem(2)} ${rem(6)} rgba(20, 20, 43, 0.04);
  border-radius: ${rem(16)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 100%;
    padding: ${rem(43)} ${rem(31)};
  }
`;
const RequestFreeTitle = styled(H2Box)`
  margin-bottom: ${rem(8)};
`;
const RequestFreeDescription = styled(DescriptionBox)`
  margin-bottom: ${rem(20)};
`;

const RequestFreeIcon = styled.div`
  margin-bottom: ${rem(50)};
`;
const RequestFreeBoxSubtitle = styled(H3Box)`
  margin-top: ${rem(55)};
  margin-bottom: ${rem(9)};
`;
const RequestFreeFormField = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: ${rem(33)};
  margin-bottom: ${rem(32)};
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-wrap: wrap;
  }
`;

export default RequestFree;
