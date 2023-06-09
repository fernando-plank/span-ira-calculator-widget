import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray};

  @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    padding: 96px 64px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};

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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 42px;

  width: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 560px;
  }
`

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child {
    margin-bottom: 73px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 50%;
  }
`

export const BodyContent = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`

export const BodyText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
`

export const LearnMoreButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  width: 160px;
  height: 40px;
  margin-left: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    align-self: end;
    margin-top: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    align-self: start;
    margin-top: 0px;
  }
`

export const LocalName = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin-top: 40px;
`

export const Separator = styled.div`
  height: 1px;
  background: #b0b0b1;
  border-radius: 2px;
`

export const TextFooter = styled.p`
  font-style: normal;
  font-weight: 500;
  margin-top: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 460px;
    font-size: 12px;
    line-height: 16px;
  }
`

export const PlusIcon = styled.img`
  cursor: pointer;
`

export const LearnMoreButtonContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    justify-content: flex-end;
  }
`
