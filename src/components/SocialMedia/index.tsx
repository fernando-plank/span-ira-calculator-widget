import React from 'react'
import Icon from '@components/Icon'

import * as S from './styles'

export interface SocialMediaProps {
  icon: string
  url: string
}

const SocialMedia = (props: SocialMediaProps) => (
  <S.Link data-testid="social-media-link" target="_blank" href={props.url}>
    <Icon icon={props.icon} />
  </S.Link>
)

export default SocialMedia
