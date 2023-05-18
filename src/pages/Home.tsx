
import React, {useEffect, useMemo, useState} from 'react'

import About from '@components/About'
import BannerGetQuote from '@components/BannerGetQuote'
import { BannerHeroSection } from '@components/BannerHeroSection'
import Faq from '@components/Faq'
import Footer from '@components/Footer'
import HouseholdInformation from '@components/HouseholdInformation'
import LocalRebates from '@components/LocalRebates'
import Navbar from '@components/Navbar'
import PersonalizedIncentives from '@components/PersonalizedIncentives'
import TaxCredits from '@components/TaxCredits'
import IncentivesServices from '@services/incentives'
import { TaxCreditsTableData } from 'types/tax-credits'

export type IncentivesProps = {
  pos_savings: number
  tax_savings: number
  estimated_annual_savings: number
}

export const Home = () => {
    const [incentives, setIncentives] = useState<any>();
    const [taxCreditsInformation, setTaxCreditsInformation] =
        useState<TaxCreditsTableData[]>([])
    const [houseHoldingInformation, setHouseHoldingInformation] =
        useState<IncentivesProps>()

    const fetchIncentives = async() => {
        const { incentives } = await new IncentivesServices().getIncentives()
        return incentives
    }

    useEffect(() => {
        const items = incentives?.filter((item) => item.type === 'tax_credit');
        setTaxCreditsInformation(
            items
        )
    }, [incentives])

    useEffect(() => {
        fetchIncentives().then(incentives => {
            setIncentives(incentives);
        })
    }, [])

    const onSubmitCallback = (data) => setHouseHoldingInformation(data)

    return (
        <>
            <Navbar/>
            <BannerHeroSection/>
            <HouseholdInformation
                info={houseHoldingInformation}
                onSubmitCallback={onSubmitCallback}
            />
            <PersonalizedIncentives householdInformation={houseHoldingInformation}/>
            <TaxCredits tableData={taxCreditsInformation}/>
            <LocalRebates/>
            <Faq/>
            <BannerGetQuote/>
            <About/>
            <Footer/>
        </>
    )
}

export default Home;