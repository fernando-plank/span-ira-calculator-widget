import Calculator from '@components/Calculator'

import * as S from './styles'

interface HouseholdInformationProps {
  onSubmitCallback: (data) => void
  onReset: () => void
  info: any
  executeScroll: () => void
}

const errorsMessage = {
  'error-message': 'Translated error message',
  default: 'An error occurred'
}

const HouseholdInformation = ({
  onSubmitCallback,
  info,
  onReset,
  executeScroll
}: HouseholdInformationProps) => {
  return (
    <>
      <Calculator
        onSubmitCallback={onSubmitCallback}
        onReset={onReset}
        executeScroll={executeScroll}
      />
      {info?.message && (
        <S.HouseholdInformationMessage>
          {errorsMessage[info.message] || errorsMessage['default']}
        </S.HouseholdInformationMessage>
      )}
    </>
  )
}
export default HouseholdInformation
