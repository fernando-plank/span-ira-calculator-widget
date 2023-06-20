import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    padding: 96px 64px;
  }
`

export const Content = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    padding: 64px 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
    padding: 64px 32px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 64px 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 96px 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    padding: 0px;
    width: 1400px;
    margin: 0px auto;
  }
`

export const AvailableNowText = styled.div`
  border: 1px solid #1f1f1f;
  border-radius: 16px;
  width: 120px;
  height: 24px;
  font-weight: 500;
  font-size: 12px;
  color: #1f1f1f;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
  margin-bottom: 8px;
`

export const Subtitle = styled.p`
  color: #1f1f1f;
  font-size: 16px;
  margin-bottom: 56px;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }
`

export const TableRowHeader = styled.tr`
  display: grid;
  grid-template-columns: 68% auto;
  gap: 24px;
`

export const TaxBody = styled.div`
  display: flex;
  align-items: end;

  .tax-credits-table-row {
    display: grid;
    grid-template-columns: 68% auto;
    gap: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    flex-direction: column-reverse;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`

export const TaxBodyContent = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 50%;
  }
`

export const TableTh = styled.th`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`

export const TableTd = styled.td`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding-top: 28px;

  .not-eligible {
    color: #b0b0b1;
  }

  svg {
    margin: 0px;

    & > path {
      fill: black;
    }

    & > circle {
      stroke: black;
    }
  }
`

export const TaxText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: ${(props) => props.theme.colors.black};
`
