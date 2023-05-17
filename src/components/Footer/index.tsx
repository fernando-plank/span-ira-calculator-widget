import React from 'react'
import Icon from '@components/Icon'
import SocialMedia from '@components/SocialMedia'
import { socialMedias } from '@components/SocialMedia/constants'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Icon icon="Logo" />
    <S.FooterContainer>
      <S.LinksWrapper>
        <S.LinksContainer>
          <S.Link href="https://www.span.io/" target="_blank">
            Home
          </S.Link>
          <S.Link href="https://www.span.io/panel" target="_blank">
            Panel
          </S.Link>
          <S.Link href="https://www.span.io/drive" target="_blank">
            Drive
          </S.Link>
          <S.Link href="https://www.span.io/app" target="_blank">
            App
          </S.Link>
          <S.Link href="https://www.span.io/partners" target="_blank">
            Installers & Partners
          </S.Link>
          <S.Link href="https://www.span.io/mission-careers" target="_blank">
            Mission & Careers
          </S.Link>
          <S.Link href="https://www.span.io/news" target="_blank">
            News
          </S.Link>
        </S.LinksContainer>
        <S.LinksContainer>
          <S.Link href="https://www.span.io/tech-portal" target="_blank">
            Tech Portal
          </S.Link>
          <S.Link href="https://support.span.io/hc/en-us/" target="_blank">
            Support
          </S.Link>
          <S.Link href="https://www.span.io/terms-of-service" target="_blank">
            Terms of Service
          </S.Link>
          <S.Link href="https://www.span.io/privacy" target="_blank">
            Privacy Policy
          </S.Link>
          <S.Link href="https://www.span.io/legal" target="_blank">
            Legal
          </S.Link>
        </S.LinksContainer>
      </S.LinksWrapper>
      <S.SocialMediaWrapper>
        {socialMedias.map((socialMedia, index) => (
          <SocialMedia
            key={index}
            icon={socialMedia.icon}
            url={socialMedia.url}
          />
        ))}
      </S.SocialMediaWrapper>
    </S.FooterContainer>
    <S.RightsText>©2023 SPAN.io, Inc. All rights reserved.</S.RightsText>
  </S.Wrapper>
)

export default Footer
