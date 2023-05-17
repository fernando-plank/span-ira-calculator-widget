import React from 'react'

import Icon from '@components/Icon'

import * as S from './styles'

export const BannerHeroSection = () => (
  <S.Wrapper>
    <S.Title>Calculate your SPAN savings</S.Title>
    <S.DescriptionWrapper>
      <Icon icon="House" />
      <S.Description data-testid="description">
        The Inflation Reduction Act provides savings for SPAN Panel and greater
        electrification projects around your home. Find out your personalized
        savings below.
      </S.Description>
    </S.DescriptionWrapper>
  </S.Wrapper>
)
export default BannerHeroSection
