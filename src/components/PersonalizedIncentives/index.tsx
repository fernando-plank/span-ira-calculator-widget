import { formatCurrency } from '@utils/currency'

import * as S from './styles'
import Info from '@components/Info'
import Icon from '@components/Icon'
import { IncentivesProps } from '../../pages/Home'
import { MutableRefObject } from 'react'

export interface PersonalizedIncentivesProps {
  householdInformation: IncentivesProps
  incentivesRef: MutableRefObject<any>
}

const PersonalizedIncentives = ({
  householdInformation,
  incentivesRef
}: PersonalizedIncentivesProps) => (
  <S.Wrapper ref={incentivesRef}>
    <S.Title>Your personalized incentives</S.Title>
    <S.IncentivesBody>
      <S.IncentivesBodyIcon>
        <Icon icon={'Lightning'} />
        <Icon icon={'Lightning'} />
        <Icon icon={'Lightning'} />
      </S.IncentivesBodyIcon>
      <div style={{ marginBottom: '60px', flex: '0 0 50%' }}>
        <S.DescriptionWrapper>
          <S.DescriptionContainer>
            <S.Subtitle>Available</S.Subtitle>
            <S.Subtitle>
              tax credits
              <Info
                text={
                  'The geothermal tax credit is not included in this total.'
                }
              />
            </S.Subtitle>
            <S.Price data-testid="household_tax_savings">
              {formatCurrency(householdInformation?.tax_savings)}
            </S.Price>
          </S.DescriptionContainer>
          <S.DescriptionContainer>
            <S.Subtitle>Estimated energy</S.Subtitle>
            <S.Subtitle>
              savings per year
              <Info
                text={`This estimate is based on energy costs in your state. 
              It includes savings on both utility and gasoline bills if you switch to an 
              electric vehicle and a heat pump for space and water heating.`}
              />
            </S.Subtitle>
            <S.Price data-testid="household_annual_savings">
              {formatCurrency(householdInformation?.estimated_annual_savings)}
            </S.Price>
          </S.DescriptionContainer>
        </S.DescriptionWrapper>
      </div>
    </S.IncentivesBody>
    <S.Separator></S.Separator>
    <S.IncentivesFooter>
      <S.IncentivesFooterContent>
        Disclaimer: These values are estimates. The rebates may be implemented
        differently in each state, so we cannot guarantee final amounts,
        eligibility, or timeline. And without additional appropriations from
        Congress, the rebate programs will end once their initial IRA funding is
        exhausted. Tax credits can only be used to offset your federal taxes
        owed, which we estimate but do not know.
      </S.IncentivesFooterContent>
      <S.IncentivesFooterContent>
        Your income is above the threshold for upfront discounts and/or EV tax
        credits, but your tax liability will likely qualify you for equipment
        tax credits. You do qualify for a performance-based efficiency rebate
        worth $4,000. However, we do not consider this an upfront discount.
        Check out this relevant case study!
      </S.IncentivesFooterContent>
    </S.IncentivesFooter>
  </S.Wrapper>
)

export default PersonalizedIncentives
