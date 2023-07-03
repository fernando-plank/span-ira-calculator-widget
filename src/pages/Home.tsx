import React, { useRef, useState } from 'react'
import HouseholdInformation from '@components/HouseholdInformation'
import LocalRebates from '@components/LocalRebates'

import PersonalizedIncentives from '@components/PersonalizedIncentives'
import TaxCredits from '@components/TaxCredits'

import * as S from './Home.styles'
import { IncentivesResponse, TaxCreditsIncentives } from '@services/types'
import { formatTaxCreditsIncentives } from '@utils/api'

export type IncentivesProps = {
  pos_savings: number
  tax_savings: number
  estimated_annual_savings: number
}

export const Home = () => {
  const [taxCreditsInformation, setTaxCreditsInformation] = useState<
    TaxCreditsIncentives[]
  >([])
  const [houseHoldingInformation, setHouseHoldingInformation] =
    useState<IncentivesProps>()
  const incentivesRef = useRef(null)

  const executeScroll = () =>
    incentivesRef.current.scrollIntoView({ behavior: 'smooth', inline: 'end' })

  const onSubmitCallback = (data) => {
    setHouseHoldingInformation(data)

    if(!data?.error) {
      setTaxCreditsInformation(
          formatTaxCreditsIncentives(data.tax_credit_incentives)
      )
    }
  }
  const onReset = () => setHouseHoldingInformation(undefined)

  return (
    <S.Wrapper>
      <S.Padding>
        <HouseholdInformation
          executeScroll={executeScroll}
          info={houseHoldingInformation}
          onSubmitCallback={onSubmitCallback}
          onReset={onReset}
          incentivesRef={incentivesRef}
        />
        {houseHoldingInformation && !houseHoldingInformation['error'] && (
          <>
            <PersonalizedIncentives
              householdInformation={houseHoldingInformation}
            />
            <TaxCredits tableData={taxCreditsInformation} />
          </>
        )}
        <LocalRebates />
      </S.Padding>
    </S.Wrapper>
  )
}

export default Home
