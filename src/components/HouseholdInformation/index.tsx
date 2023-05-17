import React from 'react'
import Calculator from '@components/Calculator'

import * as S from './styles'

const HouseholdInformation = ({ onSubmitCallback, info }) => {
  return (
    <>
      <Calculator onSubmitCallback={onSubmitCallback} />
      {info?.message && (
        <S.HouseholdInformationMessage>
          Error: {info.message}
        </S.HouseholdInformationMessage>
      )}
    </>
  )
}
export default HouseholdInformation
