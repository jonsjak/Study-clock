import styled from "styled-components";

export const SessionContainer = styled.div`
  border: 4px solid ${props => props.theme.colors.header};
  margin: 40px auto 40px auto;
  width: 200px;
  height: 140px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`