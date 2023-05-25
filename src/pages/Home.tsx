import React, { useEffect, useRef, useState } from 'react'
import HouseholdInformation from '@components/HouseholdInformation'
import LocalRebates from '@components/LocalRebates'

import PersonalizedIncentives from '@components/PersonalizedIncentives'
import TaxCredits from '@components/TaxCredits'
import IncentivesServices from '@services/incentives'
import { TaxCreditsTableData } from 'types/tax-credits'

import * as S from './Home.styles'

export type IncentivesProps = {
  pos_savings: number
  tax_savings: number
  estimated_annual_savings: number
}

export const Home = () => {
  const [incentives, setIncentives] = useState<any>()
  const [taxCreditsInformation, setTaxCreditsInformation] = useState<
    TaxCreditsTableData[]
  >([])
  const [houseHoldingInformation, setHouseHoldingInformation] =
    useState<IncentivesProps>()
  const incentivesRef = useRef(null)
  const executeScroll = () =>
    incentivesRef.current.scrollIntoView({ behavior: 'smooth' })
  const fetchIncentives = async () => {
    const { incentives } = await new IncentivesServices().getIncentives()
    return incentives
  }

  useEffect(() => {
    let eletricPanel: any = null
    let items: any[] = incentives?.filter((item) => {
      if (item.item === 'Electric Panel') {
        eletricPanel = item
      }
      return item.type === 'tax_credit' && item.item !== 'Electric Panel'
    })

    items = items?.filter(
      (item, index, self) =>
        index ===
        self.findIndex((t) => {
          return t.item === item.item
        })
    )

    if (items && eletricPanel) {
      eletricPanel['item'] = 'SPAN Smart Electrical Panel'
      items.unshift(eletricPanel)
    }
    setTaxCreditsInformation(items)
  }, [incentives])

  useEffect(() => {
    fetchIncentives().then((incentives) => {
      setIncentives(incentives)
    })
  }, [])
  const onSubmitCallback = (data) => setHouseHoldingInformation(data)

  return (
    <S.Wrapper>
      <S.Padding>
        {/*<Navbar/>*/}
        {/*<BannerHeroSection/>*/}
        <HouseholdInformation
          executeScroll={executeScroll}
          info={houseHoldingInformation}
          onSubmitCallback={onSubmitCallback}
        />
        <PersonalizedIncentives
          incentivesRef={incentivesRef}
          householdInformation={houseHoldingInformation}
        />
        <TaxCredits tableData={taxCreditsInformation} />
        <LocalRebates />
        {/*<Faq/>*/}
        {/*<BannerGetQuote/>*/}
        {/*<About/>*/}
        {/*<Footer/>*/}
      </S.Padding>
    </S.Wrapper>
  )
}

export default Home
