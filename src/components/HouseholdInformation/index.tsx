import Calculator from '@components/Calculator'

import * as S from './styles'

interface HouseholdInformationProps {
  onSubmitCallback: (data) => void
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
  executeScroll
}: HouseholdInformationProps) => {
  return (
    <>
      <Calculator
        onSubmitCallback={onSubmitCallback}
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
