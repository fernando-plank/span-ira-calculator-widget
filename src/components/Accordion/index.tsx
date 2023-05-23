import React, { useState } from 'react'

import Icon from '@components/Icon'
import classname from 'classnames'

import * as S from './styles'

export interface AccordionProps {
  children: React.ReactNode
  icon: string
  title: string
  style?: object
}

const Accordion = (props: AccordionProps) => {
  const [showSection, setShowSection] = useState(false)
  return (
    <>
      <S.Header>
        <S.Title
          data-testid="accordion-title"
          style={props.style}
          onClick={() => setShowSection(!showSection)}
        >
          {props.title}
        </S.Title>
        <Icon icon={props.icon} onClick={() => setShowSection(!showSection)} />
      </S.Header>
      <S.Separator></S.Separator>
      <S.Body
        data-testid="accordion-body"
        className={classname({ active: showSection }, 'accordion-body')}
      >
        {props.children}
      </S.Body>
    </>
  )
}

export default Accordion
