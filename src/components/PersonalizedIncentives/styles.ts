import styled from 'styled-components'

export const Wrapper = styled.div`
  width: fill-available;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 50px 24px;
  margin-top: 67px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin: 0px 30px;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: left;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 30vw;
    font-size: 44px;
    line-height: 46px;
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
  }
`

export const IncentivesBodyIcon = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: end;
  padding: 0px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    position: absolute;
    align-self: end;
    margin-bottom: 140px;
  }
`

export const LightningIcon = styled.img`
  margin: 0px 10px;
`

export const DescriptionWrapper = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
    width: 100%;
  }
`

export const DescriptionContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 15vw;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    margin-top: 28px;
  }
`

export const Subtitle = styled.h6`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: left;
  max-width: 47vw;

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
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`

export const Total = styled.h6`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
  margin-top: 44px;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
  }
`

export const TotalPrice = styled.h1`
  font-style: normal;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 136px;
    line-height: 136px;
    font-weight: 600;
  }
`

export const IncentivesFooter = styled.div`
  display: flex;
  margin-top: 40px;
`

export const IncentivesFooterContent = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding-right: 59px;
  text-align: left;
  color: ${(props) => props.theme.colors.white};
`

export const Separator = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.white};
`

export const TotalWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
  }
`
