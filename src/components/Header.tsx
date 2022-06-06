import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../img/other/logo.svg";
import sun from "../img/other/icon-sun.svg";
import moon from "../img/other/icon-moon.svg";

import bg from "../img/other/bg-pattern-header.svg";
import { useAppDispatch } from "../redux/customHook";
import { setUpdate } from "../redux/searchSlice";

const Container = styled.header`
  padding: 5rem 10rem 8rem 10rem;
  background-color: var(--color-primary-violet);

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-left-radius: 10rem;

  background-image: url(${bg});

  @media (max-width: 1050px) {
    padding: 5rem 5rem 8rem 5rem;
  }

  @media (max-width: 850px) {
    padding: 5rem 3rem 8rem 3rem;
  }

  @media (max-width: 500px) {
    padding: 5rem 3rem 10rem 3rem;
  }
`;

const LogoContainer = styled(Link)``;

const Logo = styled.img``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  height: 2.5rem;
  width: 6rem;

  margin-left: 1rem;
  margin-right: 1rem;
`;

const SwitchInput = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
`;

interface BProps {
  toggle: boolean;
}

const SwitchButton = styled.span<BProps>`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: white;
  border-radius: 2rem;

  ::before {
    content: "";
    display: block;

    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;

    background-color: var(--color-primary-violet);

    position: absolute;
    top: 50%;
    left: 0.5rem;
    left: ${(props) => (props.toggle ? "0.5rem" : "3.7rem")};

    transform: translate(0, -50%);
    transition: all 0.2s ease-in;
  }
`;

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const [toggle, setToggle] = useState<boolean>(true); // Переключение кнопки
  const [theme, setTheme] = useState<string>("light"); // Переключение темы

  const handleToggle = (): void => {
    setToggle((prev) => !prev);
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleUpdate = (): void => {
    dispatch(setUpdate());
  };

  return (
    <Container>
      <LogoContainer to="/devjobs/">
        <Logo src={logo} alt={logo} onClick={handleUpdate} />
      </LogoContainer>

      <ButtonContainer>
        <Logo src={sun} alt="sun" style={{ height: "2rem", width: "2rem" }} />

        <SwitchLabel>
          <SwitchInput />
          <SwitchButton toggle={toggle} onClick={handleToggle} />
        </SwitchLabel>

        <Logo src={moon} alt="moon" style={{ height: "2rem", width: "2rem" }} />
      </ButtonContainer>
    </Container>
  );
};

export default Header;
