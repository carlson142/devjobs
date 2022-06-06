import React from "react";
import styled from "styled-components";
import CustomButton from "../../components/CustomButton";

import { motion } from "framer-motion";

interface MainProps {
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

const Container = styled(motion.div)`
  background-color: var(--color-element);

  width: 100rem;

  padding: 5rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1050px) {
    width: 90vw;
    margin: 0 auto;
  }

  @media (max-width: 850px) {
    margin-bottom: 7rem;
  }

  @media (max-width: 500px) {
    padding: 5rem 3rem;
  }
`;

const HeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeadBlockLeft = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    margin-bottom: 2rem;
  }
`;

const SimpleBlock = styled.div`
  margin-bottom: 1rem;
`;

const SimpleText = styled.span`
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

const Position = styled.h2`
  font-size: 3rem;
  cursor: pointer;

  margin-bottom: 1rem;
`;

const Location = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary-violet);
`;

const HeadBlockRight = styled.div`
  @media (max-width: 850px) {
    align-self: center;
  }
`;

const TextBlock = styled.div`
  margin: 3rem 0;
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: var(--color-dark-grey);
  line-height: 1.6;
`;

const Heading = styled.h3`
  font-size: 2rem;
  color: var(--color-text);
`;

const ReqBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 4rem;
`;

const ReqItem = styled.span`
  font-size: 1.6rem;
  color: var(--color-dark-grey);
  line-height: 1.6;

  position: relative;

  transform: translateX(1.5rem);

  ::before {
    content: "";
    display: block;

    position: absolute;
    top: 1rem;
    left: -2rem;

    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;

    background-color: var(--color-dark-grey);
  }

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const DoBlock = styled.div`
  display: flex;
  flex-direction: column;

  /* margin-bottom: 4rem; */
`;

const DoItem = styled.span`
  font-size: 1.6rem;
  color: var(--color-dark-grey);
  line-height: 1.6;

  /* transform: translateX(1.5rem); */

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const DoIndex = styled.span`
  font-size: 1.6rem;
  color: var(--color-primary-violet);
  font-weight: 700;

  margin-right: 1.5rem;
`;

const DetailsMain: React.FC<MainProps> = (props) => {
  return (
    <Container>
      <HeadBlock>
        <HeadBlockLeft>
          <SimpleBlock>
            <SimpleText>{props.postedAt}</SimpleText>
            <SimpleText>{props.contract}</SimpleText>
          </SimpleBlock>

          <Position>{props.position}</Position>

          <Location>{props.location}</Location>
        </HeadBlockLeft>

        <HeadBlockRight>
          <CustomButton stype="primary" text="Apply Now" />
        </HeadBlockRight>
      </HeadBlock>

      <TextBlock>
        <Text>{props.description}</Text>
      </TextBlock>

      <Heading>Requirements</Heading>
      <TextBlock>
        <Text>{props.requirements.content}</Text>
      </TextBlock>

      <ReqBlock>
        {props.requirements.items.map((el, idx) => {
          return <ReqItem key={idx}>{el}</ReqItem>;
        })}
      </ReqBlock>

      <Heading>What You Will Do</Heading>
      <TextBlock>
        <Text>{props.role.content}</Text>
      </TextBlock>

      <DoBlock>
        {props.role.items.map((el, idx) => {
          return (
            <DoItem key={idx}>
              <DoIndex>{idx + 1}.</DoIndex> {el}
            </DoItem>
          );
        })}
      </DoBlock>
    </Container>
  );
};

export default DetailsMain;
