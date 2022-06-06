import React from "react";
import styled from "styled-components";
import CustomButton from "../../components/CustomButton";

interface TopProps {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  website: string;
}

const Container = styled.div`
  display: flex;

  background-color: var(--color-element);

  width: 100rem;
  height: 15rem;

  border-radius: 1rem;

  transform: translateY(-5rem);

  overflow: hidden;

  @media (max-width: 1050px) {
    width: 90vw;
    margin: 0 auto;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    height: 25rem;
    overflow: visible;
    justify-content: space-evenly;
    align-items: center;
  }
`;

interface LeftProps {
  bg: string;
}

const Left = styled.div<LeftProps>`
  background-color: ${(props) => props.bg};

  height: 100%;
  width: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    height: 10rem;
    width: 10rem;
    border-radius: 1rem;

    position: absolute;
    top: -5rem;
    left: 50%;
    transform: translate(-50%);
  }
`;

const Logo = styled.img`
  height: auto;
  width: 8rem;

  @media (max-width: 850px) {
    width: 5rem;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 4rem;

  @media (max-width: 850px) {
    text-align: center;
  }
`;

const Company = styled.h2`
  font-size: 2.5rem;
  color: var(--color-text);

  @media (max-width: 850px) {
    margin-bottom: 1rem;
  }
`;

const Link = styled.span`
  font-size: 1.6rem;
  color: var(--color-dark-grey);
`;

const Right = styled.div`
  margin-left: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 4rem;

  @media (max-width: 850px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const DetailsTop: React.FC<TopProps> = (props) => {
  console.log(props.logo);

  return (
    <Container>
      <Left bg={props.logoBackground}>
        <Logo src={`.${props.logo}`} alt="logo" />
      </Left>

      <Center>
        <Company>{props.company}</Company>
        <Link>{props.website}</Link>
      </Center>

      <Right>
        <CustomButton stype="secondary" text="Company Site" />
      </Right>
    </Container>
  );
};

export default DetailsTop;
