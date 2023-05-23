import styled from "styled-components";

export const Padding = styled.div`
  max-width: 1400px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

export const Wrapper = styled.div`
  padding-left: 64px;
  padding-right: 64px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`