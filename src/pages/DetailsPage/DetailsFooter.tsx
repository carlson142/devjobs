import React from "react";
import styled from "styled-components";
import CustomButton from "../../components/CustomButton";

interface Footer {
  position: string;
  company: string;
}

const Container = styled.div`
  background-color: var(--color-element);

  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;

  padding: 5rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1050px) {
    width: 90vw;
    margin: 0 auto;
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const Position = styled.h2`
  font-size: 3rem;
  cursor: pointer;

  margin-bottom: 1rem;

  @media (max-width: 850px) {
    font-size: 2rem;
  }
`;

const Company = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--color-text);
`;

const DetailsFooter: React.FC<Footer> = (props) => {
  return (
    <Container>
      <Block>
        <Position>{props.position}</Position>
        <Company>{props.company}</Company>
      </Block>

      <CustomButton stype="primary" text="Apply Now" />
    </Container>
  );
};

export default DetailsFooter;
