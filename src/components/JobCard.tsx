import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

interface CardProps {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  background-color: var(--color-element);
  border-radius: 1rem;

  position: relative;

  padding: 5rem 2rem;
`;

interface LCProps {
  logoBackground: string;
}

const LogoContainer = styled.div<LCProps>`
  height: 5rem;
  width: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;

  background-color: ${(props) => props.logoBackground};

  position: absolute;
  top: -2rem;
  left: 2rem;
`;

const Logo = styled.img``;

const Top = styled.div``;

const TopText = styled.span`
  font-size: 1.6rem;
  color: var(--color-dark-grey);

  position: relative;

  :not(:last-child) {
    margin-right: 2rem;

    ::before {
      content: "";
      display: block;

      height: 0.3rem;
      width: 0.3rem;
      border-radius: 50%;

      background-color: var(--color-dark-grey);

      position: absolute;
      right: -1.5rem;
      top: 50%;
      transform: translate(-50%);
    }
  }
`;

const Mid = styled.div``;

const Position = styled.h2`
  font-size: 2rem;
  cursor: pointer;

  margin-bottom: 1rem;

  transition: all 0.2s ease-in;
  :hover {
    opacity: 0.5;
  }
`;

const Company = styled.span`
  font-size: 1.6rem;
  color: var(--color-dark-grey);
`;

const Bot = styled.div``;

const Country = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary-violet);
`;

const JobCard: React.FC<CardProps> = (props) => {
  const navigate = useNavigate();

  const ContainerVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
  };

  return (
    <Container
      initial={"hidden"}
      animate={"visible"}
      variants={ContainerVariants}
      transition={{ duration: 0.5 }}
    >
      <LogoContainer logoBackground={props.logoBackground}>
        <Logo src={props.logo} alt="logo" />
      </LogoContainer>

      <Top>
        <TopText>{props.postedAt}</TopText>
        <TopText>{props.contract}</TopText>
      </Top>

      <Mid>
        <Position
          onClick={() => {
            navigate(`/details/:${props.id}`);
          }}
        >
          {props.position}
        </Position>
        <Company>{props.company}</Company>
      </Mid>

      <Bot>
        <Country>{props.location}</Country>
      </Bot>
    </Container>
  );
};

export default JobCard;
