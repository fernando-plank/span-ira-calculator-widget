import React from 'react'
import * as S from './styles'

const BannerGetQuote = () => (
  <S.Wrapper>
    <S.BannerContent>
      <S.BannerTextWrapper>
        <S.BannerTitle>Ready</S.BannerTitle>
        <S.BannerTitle>for SPAN?</S.BannerTitle>
        <S.BannerDescription>
          Complete our easy form and one of our Home Advisors will be in touch
          to discuss your project scope, and the savings available.
        </S.BannerDescription>
      </S.BannerTextWrapper>
      <S.ButtonWrapper>
        <S.GetQuoteButton>Get quote</S.GetQuoteButton>
        <S.ExplorePanelButton
          onClick={() => window.open('https://www.span.io/panel', '_self')}
        >
          Explore panel
        </S.ExplorePanelButton>
      </S.ButtonWrapper>
    </S.BannerContent>
  </S.Wrapper>
)

export default BannerGetQuote
