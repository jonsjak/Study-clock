import styled from "styled-components";

export const SessionContainer = styled.div`
  border: 4px solid;
  margin: 40px auto 40px auto;
  width: 200px;
  height: 140px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 3px 20px 0px ${props => props.theme.colors.shadow};

    div {
      font-size: 1.2rem;
    }
`