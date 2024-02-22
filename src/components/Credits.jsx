import styled from "styled-components"

const CreditsContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin-top: 20px;
`

export const Credits = () => {
  return (
    <CreditsContainer>    
      <p>Designed and Coded By</p>
      <p>Jonas Jakobson</p>
    </CreditsContainer>
  )
}
