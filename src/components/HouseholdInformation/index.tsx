import Calculator from '@components/Calculator'

import * as S from './styles'
import { MutableRefObject } from 'react'

interface HouseholdInformationProps {
  onSubmitCallback: (data) => void
  onReset: () => void
  info: any
  executeScroll: () => void
  incentivesRef?: MutableRefObject<any>
}

const errorsMessage = {
  'error-message': 'Translated error message',
  default: 'An error occurred'
}

const HouseholdInformation = ({
  onSubmitCallback,
  info,
  onReset,
  executeScroll,
  incentivesRef
}: HouseholdInformationProps) => {

  return (
    <>
      <Calculator
        onSubmitCallback={onSubmitCallback}
        onReset={onReset}
        executeScroll={executeScroll}
        incentivesRef={incentivesRef}
        info={info}
      />
      {info?.message && (
        <S.HouseholdInformationMessage>
          {info.message || errorsMessage['default']}
        </S.HouseholdInformationMessage>
      )}
    </>
  )
}
export default HouseholdInformation
