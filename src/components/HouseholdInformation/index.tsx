import Calculator from '@components/Calculator'

import * as S from './styles'
import { MutableRefObject } from 'react'
import { capitalizeFirstLetter, cleanError } from '@utils/string'

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
    <S.Wrapper>
      <Calculator
        onSubmitCallback={onSubmitCallback}
        onReset={onReset}
        executeScroll={executeScroll}
        incentivesRef={incentivesRef}
      />
      {info?.message && (
        <S.HouseholdInformationMessage>
          {cleanError(info.message)}
        </S.HouseholdInformationMessage>
      )}
    </S.Wrapper>
  )
}
export default HouseholdInformation
