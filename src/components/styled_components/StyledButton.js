import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 25%;
  padding: 10px;
  box-shadow: 1px 4px 5px ${props => props.theme.colors.shadow};
  transition: all 0.3s ease; /* Add a transition for smoother animation */

  :hover {
    opacity: 0.7;
    transform: scaleY(1.1);
    background-color: ${props => props.theme.colors.hover}; /* Change background color on hover */
  }

  :active {
    transform: scale(1.3);
  }
`;
