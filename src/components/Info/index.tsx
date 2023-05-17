import React from 'react'
import { useState } from 'react'

import Icon from '@components/Icon'

import * as S from './styles'

const Info = (props: { text: string }) => {
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
      <Icon
        data-testid="tooltip-data"
        style={{ margin: '0px 5px' }}
        icon={'Info'}
      />
    </S.Tooltip>
  )
}
export default Info
