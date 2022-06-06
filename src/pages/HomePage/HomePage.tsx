import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../../components/CustomButton";
import JobCard from "../../components/JobCard";
import SearchComponent from "../../components/SearchComponent";

import { useAppSelector } from "../../redux/customHook";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 7rem;
  padding-top: 15rem;

  position: relative;

  @media (max-width: 1050px) {
    padding-bottom: 15rem;
  }

  @media (max-width: 850px) {
    padding: 2rem;
    padding-top: 15rem;
    padding-bottom: 15rem;
  }
`;

interface ContProps {
  long: boolean;
}

const Container = styled.section<ContProps>`
  display: grid;
  grid-template-columns: repeat(3, minmax(25rem, 40rem));
  grid-auto-rows: 25rem;
  grid-gap: 5rem 3rem;

  margin: 0 auto;
  margin-bottom: 5rem;

  transition: all 0.2s ease-in;

  @media (max-width: 1050px) {
    transform: translateY(10rem);

    grid-template-columns: repeat(2, minmax(25rem, 40rem));
  }

  @media (max-width: 850px) {
    transform: translateY(10rem);

    grid-template-columns: minmax(25rem, 70rem);
  }
`;

const ButtonContainer = styled.div`
  @media (max-width: 1050px) {
    transform: translateY(10rem);
  }
`;

const HomePage: React.FC = () => {
  const [long, setLong] = useState(false);

  const handleClick = (): void => {
    setLong((prev) => !prev);
  };

  const filteredData = useAppSelector(
    (state) => state.searchReducer.filteredData
  );

  return (
    <Wrapper>
      <SearchComponent />

      <Container long={long}>
        {long === false
          ? filteredData
              .filter((el, idx) => idx < 9)
              .map((el, idx) => {
                return <JobCard key={el.id} {...el}></JobCard>;
              })
          : filteredData.map((el, idx) => {
              return <JobCard key={el.id} {...el}></JobCard>;
            })}
      </Container>

      {!long && (
        <ButtonContainer>
          <CustomButton
            stype="primary"
            text="Load More"
            onClick={handleClick}
          />
        </ButtonContainer>
      )}
    </Wrapper>
  );
};

export default HomePage;
