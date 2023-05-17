import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    background: url(${({ theme }) => theme.images.quote.mobile}) no-repeat;
    color: ${({ theme }) => theme.colors.black};
    background-size: 100%;
    height: auto;
    padding-top: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background: url(${({ theme }) => theme.images.quote.desktop}) no-repeat
      center;
    color: ${({ theme }) => theme.colors.white};
    background-size: 100%;
    height: 730px;
    padding-top: 0px;
  }
`

export const BannerImage = styled.img`
  width: 100%;
`

export const BannerContent = styled.div`
    text-align: left;
    display: flex;

    @media(min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        padding 41px 22px;
        flex-direction: column;
        margin-top: 278px;
    }

    @media(min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding 60px 55px;
        flex-direction: row;
        align-items: flex-end;
        padding-top: 245px;
        height: 640px;
        margin-top: 0px;
    }
`

export const BannerTextWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 70%;
    align-self: center;
  }
`

export const BannerTitle = styled.h1`
  font-weight: 600;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    font-size: 70px;
    line-height: 70px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 136px;
    line-height: 136px;
  }
`

export const BannerDescription = styled.p`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 51px;
    margin-top: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
    margin-top: 63px;
  }
`

export const GetQuoteButton = styled.button`
  cursor: pointer;
  border-radius: 20px;
  margin-right: 14px;
  height: 42px;
  width: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    background-color: ${({ theme }) => theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`

export const ExplorePanelButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 14px;
  height: 42px;
  width: 50%;
  background: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    border: 2px solid ${({ theme }) => theme.colors.black};
    border-radius: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const ButtonWrapper = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 30%;
  }
`
