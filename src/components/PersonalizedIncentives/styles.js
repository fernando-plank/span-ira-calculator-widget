import styled from 'styled-components'

export const Wrapper = styled.div`
  width: fill-available;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 50px 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin: 0px 30px;
  }

  svg {
    margin: 0px 10px;
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
  padding-left: 40px;
  height: 30vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    position: absolute;
    align-self: end;
    margin-top: 100px;
  }
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
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    margin-top: 28px;
  }
`

export const Subtitle = styled.h6`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    max-width: 47vw;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 90%;
  }

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
  margin-top: 40px;
`

export const IncentivesFooterContent = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding-right: 59px;
  text-align: left;
`

export const Separator = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.white};
`;

export const TotalWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
  }
`;
