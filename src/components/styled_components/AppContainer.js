import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 15px 24px 22px 8.5px ${props => props.theme.colors.shadow};
  border-radius: 15px;
  opacity: 0.8;

    @media (max-width: 667px) {
      max-width: 80%;
    }

    @media (min-width: 668) and (max-width: 1024px) {
      max-width: 80%;
    }

    h1 {
      color: ${props => props.theme.colors.primary};
      font-family: ${props => props.theme.fonts.text};
    }

    h2 {
      color: ${props => props.theme.colors.text};
      font-family: ${props => props.theme.fonts.text};
    }

    p {
      color: ${props => props.theme.colors.text};
      font-family: ${props => props.theme.fonts.body};
    }

    button {
      background-color: ${props => props.theme.colors.button};
      color: ${props => props.theme.colors.buttonText};
    }
`;