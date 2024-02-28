import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  padding: 20px;
  box-shadow: 15px 24px 22px 8.5px ${props => props.theme.colors.shadow};
  border-radius: 15px;
  box-shadow: 1px 3px 20px 0px ${props => props.theme.colors.subHeader};

    @media (max-width: 667px) {
      max-width: 90%;
    }

    h1 {
      color: ${props => props.theme.colors.header};
      font-family: ${props => props.theme.fonts.header};
      font-size: ${props => props.theme.textSizes.header};
    }

    h2 {
      color: ${props => props.theme.colors.subHeader};
      font-family: ${props => props.theme.fonts.text};
      font-size: ${props => props.theme.textSizes.subHeader};
    }

    p {
      color: ${props => props.theme.colors.text};
      font-family: ${props => props.theme.fonts.body};
      font-size: ${props => props.theme.textSizes.body};
    }
`;