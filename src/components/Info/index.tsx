import React, { ReactChild } from 'react'
import { useState } from 'react'

import Icon from '@components/Icon'

import * as S from './styles'

const Info = (props: { text: ReactChild }) => {
  const [showContent, setShowContent] = useState(false)
  return (
    <S.Tooltip
      data-testid="tooltip"
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      {showContent && (
        <S.InfoContent data-testid="tooltip-content">
          {props.text}
        </S.InfoContent>
      )}
      <Icon data-testid="tooltip-data" icon={'Info'} />
    </S.Tooltip>
  )
}
export default Info
