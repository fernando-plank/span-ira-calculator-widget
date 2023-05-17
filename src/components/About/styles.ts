import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    background: url(${({ theme }) => theme.banner.mobile}) no-repeat;
    padding: 347px 30px 20% 30px;
    text-align: left;
    flex-direction: column;
    background-size: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background: url(${({ theme }) => theme.banner.desktop}) no-repeat;
    flex-direction: row-reverse;
    padding: 267px 64px 20% 64px;
    background-size: 100%;
  }
`

export const Title = styled.h1`
  font-weight: 600;
  color: ${props => props.theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 55%;
    font-size: 70px;
    line-height: 70px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
    font-size: 136px;
    line-height: 136px;
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 100%;
    margin-top: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
    margin-top: 0px;
  }
`

export const ReadBlogButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  background: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
  height: 40px;
  margin-top: 40px;
  margin-bottom: 104px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 30%;
  }
`
