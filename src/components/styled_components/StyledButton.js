import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${props => props.theme.colors.text};
  border-color: ${props => props.theme.colors.text};
  border-width: 4px;
  cursor: pointer;
  border-radius: 25%;
  width: 40px;
  height: 40px;
  margin: 8px;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  &:active {
    transform: scale(1.2);
    color: rgb(44 47 74);
    opacity: 1;
  }
`;
