import React from "react";
import styled from "styled-components";

interface IButton {
  stype: string;
  text: string;
  onClick?: () => void;
  transform?: boolean;
}

interface ButtonProps {
  stype: string;
  tr?: boolean;
}

const Button = styled.button<ButtonProps>`
  min-width: 15rem;
  padding: 2rem 3rem;

  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;

  border-radius: 1rem;
  border: none;

  cursor: pointer;

  transform: ${(props) => (props.tr ? "translateY(10rem)" : "none")};

  ${(props) =>
    props.stype === "primary" &&
    `
    background-color: var(--color-primary-violet);
    color: white;

    transition: all 0.2s ease-in;

    :hover{
        opacity: 0.6;
    }
  `}

  ${(props) =>
    props.stype === "secondary" &&
    `
    background-color: #eeeffc;
    color: var(--color-primary-violet);

    transition: all 0.2s ease-in;

    :hover{
        background-color: #a9b0f7;  
    }
  `}
`;

const CustomButton: React.FC<IButton> = ({
  text,
  stype,
  onClick,
  transform,
}) => {
  return (
    <Button stype={stype} onClick={onClick} tr={transform}>
      {text}
    </Button>
  );
};

export default CustomButton;
