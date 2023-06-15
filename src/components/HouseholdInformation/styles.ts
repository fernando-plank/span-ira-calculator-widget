import styled from 'styled-components'

export const Wrapper = styled.div``

export const HouseholdInformationMessage = styled.p`
  color: red;
  font-weight: 500;
  font-size: 15px;
  line-height: 32px;
  padding-bottom: 30px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    margin: 30px;
  }
`
