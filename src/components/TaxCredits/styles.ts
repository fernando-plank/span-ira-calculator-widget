import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    padding: 56px 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
    padding: 56px 32px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 56px 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 56px 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    width: ${({ theme }) => theme.breakpoints.laptopL};
    margin: 0px auto;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
  margin-bottom: 56px;
`

export const TaxBody = styled.div`
  display: flex;
  align-items: end;

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
    padding-bottom: 40px;
  }
`

export const Table = styled.table`
  width: 100%;
  text-align: left;
  margin-bottom: 35px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-bottom: 135px;
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
  padding-top: 20px;
`

export const TaxText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: ${(props) => props.theme.colors.black};
`
