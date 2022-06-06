import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

import search from "../img/other/icon-search.svg";
import location from "../img/other/icon-location.svg";

import { IoCheckmark } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../redux/customHook";
import { setFullTime } from "../redux/toggleSlice";
import {
  setFiltered,
  setMainSearch,
  setLocationSearch,
} from "../redux/searchSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-element);

  max-width: 1260px;
  min-width: 760px;

  width: 100%;

  padding: 2rem 3rem;

  position: absolute;
  top: -5rem;
  left: 50%;
  transform: translate(-50%);

  border-radius: 1rem;

  @media (max-width: 1440px) {
    width: 90%;
  }

  @media (max-width: 1050px) {
    flex-direction: column;
  }

  @media (max-width: 850px) {
    max-width: 760px;
    min-width: 360px;
  }
`;

const IconContainer = styled.div``;

const Icon = styled.img``;

const MainSearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 2;

  border-right: 1px solid var(--color-grey);

  @media (max-width: 1050px) {
    flex: 1;
    padding: 1.5rem 0;

    border-right: none;
    border-bottom: 1px solid var(--color-grey);
  }
`;

const MainSearch = styled.input`
  border: none;
  outline: none;

  flex: 1;
  font-size: 1.6rem;

  margin-left: 2rem;
  margin-right: 2rem;

  background-color: var(--color-element);

  color: var(--color-text);

  ::placeholder {
    color: var(--color-grey);
  }
`;

const LocationSearchContainer = styled.div`
  display: flex;
  align-items: center;

  flex: 1.5;

  border-right: 1px solid var(--color-grey);

  margin-left: 2rem;

  @media (max-width: 1050px) {
    flex: 1;
    margin-left: 0;
    padding: 1.5rem 0;

    border-right: none;
    border-bottom: 1px solid var(--color-grey);
  }
`;

const LocationSearch = styled.input`
  border: none;
  outline: none;

  font-size: 1.6rem;

  margin-left: 2rem;
  margin-right: 2rem;

  background-color: var(--color-element);

  color: var(--color-text);

  ::placeholder {
    color: var(--color-grey);
  }

  @media (max-width: 1050px) {
    margin-left: 2.8rem;
  }
`;

const ToggleContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 15rem;
  user-select: none;

  flex: 0;

  margin-right: 2rem;

  @media (max-width: 1050px) {
    flex: 1;
    padding: 1.5rem 0;
    justify-content: center;

    margin-right: 0;
  }
`;

const ToggleButton = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
`;

interface CTBProps {
  fullTime: boolean;
}

const CustomToggleButton = styled.span<CTBProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2.5rem;
  width: 2.5rem;

  background-color: ${(props) =>
    props.fullTime === false ? "#e7e8e9" : "var(--color-primary-violet)"};

  border-radius: 0.5rem;
  cursor: pointer;

  transition: all 0.2s ease-in;

  :hover {
    background-color: ${(props) =>
      props.fullTime === false
        ? "var(--color-primary-light-violet)"
        : "var(--color-primary-violet)"};
  }
`;

const ToggleText = styled.p`
  font-size: 1.6rem;
  font-weight: 700;

  @media (max-width: 1050px) {
    margin-left: 2rem;
  }
`;

const SearchComponent: React.FC = () => {
  // TOGGLE FULL TIME ONLY]
  const fullTime = useAppSelector((state) => state.toggleReducer.fullTime);
  const dispatch = useAppDispatch();

  const [toggle, setToggle] = useState<boolean>(!fullTime);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    dispatch(setFullTime(toggle));
  };

  // SAVE INPUTS AT STORE
  const mainSearch = useAppSelector((state) => state.searchReducer.mainSearch);
  const locationSearch = useAppSelector(
    (state) => state.searchReducer.locationSearch
  );

  const handleMainSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMainSearch(e.target.value.toLowerCase()));
  };

  const handleLocationSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLocationSearch(e.target.value.toLowerCase()));
  };

  // CLICK ON SEARCH BUTTON
  const handleSearch = () => {
    dispatch(setFiltered({ fullTime, mainSearch, locationSearch }));
  };

  return (
    <Container>
      {/* MAIN SEARCH */}
      <MainSearchContainer>
        <IconContainer>
          <Icon src={search} alt="search" />
        </IconContainer>

        <MainSearch
          placeholder="Filter by title, companies, expertise..."
          onChange={handleMainSearch}
        />
      </MainSearchContainer>

      {/* LOCATION SEARCH */}
      <LocationSearchContainer>
        <IconContainer>
          <Icon src={location} alt="searlocationch" />
        </IconContainer>

        <LocationSearch
          placeholder="Filter by location..."
          onChange={handleLocationSearch}
        />
      </LocationSearchContainer>

      {/* TOGGLE */}
      <ToggleContainer>
        <ToggleButton type="checkbox" />

        <CustomToggleButton fullTime={fullTime} onClick={handleToggle}>
          {fullTime && <IoCheckmark size={20} style={{ color: "white" }} />}
        </CustomToggleButton>

        <ToggleText>Full time only</ToggleText>
      </ToggleContainer>

      <CustomButton stype="primary" text="Search" onClick={handleSearch} />
    </Container>
  );
};

export default SearchComponent;
