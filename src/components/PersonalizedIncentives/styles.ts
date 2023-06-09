import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 0px 41px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    padding: 40px 0px 0px 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    .second-section {
      margin-top: 40px;
    }
  }
`

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    padding: 48px 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 56px 40px;
  }
`

export const Content = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    padding: 0px;
    width: 1400px;
    margin: 0px auto;
  }

  svg {
    margin: 0px 10px;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  text-align: left;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    font-size: 32px;
    line-height: 40px;
    width: 300px;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 450px;
    font-size: 48px;
    line-height: 56px;
  }
`

export const IncentivesBody = styled.div`
  display: flex;
  margin-bottom: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    flex-direction: column-reverse;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const IncentivesBodyIcon = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 21px;
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    //width: 100%;
  }
`

export const DescriptionBox = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: column;
  }
`

export const DescriptionContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-right: 50px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    margin-top: 28px;
  }
`

export const TotalContainer = styled.div`
  margin-top: 44px;
  color: ${({ theme }) => theme.colors.white};
`

export const TotalText = styled.h1`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  margin-bottom: 25px;

`

export const TotalPrice = styled.h1`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 156px;
    font-weight: 600;
    line-height: 136px;
  }
`

export const Subtitle = styled.h6`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  text-align: left;
  max-width: 100vw;

  svg {
    & > path {
      fill: white;
    }

    & > circle {
      stroke: white;
    }
  }
`

export const Price = styled.h6`
  font-size: 38px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`

export const IncentivesFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 56px;

  > :last-child {
    margin-right: 31px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: column;
    margin-top: 48px;
  }
`

export const IncentivesFooterContent = styled.p`
  color: ${({ theme }) => theme.colors.white} !important;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 522px;
  }
`

export const ContentLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 12px;
  margin: 12px 0px 9px 0px;
  font-weight: bold;
`

export const Separator = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.white};
`

export const TotalWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
  }
`
