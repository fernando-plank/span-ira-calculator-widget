import { formatCurrency } from '@utils/currency'

import * as S from './styles'
import Info from '@components/Info'
import Icon from '@components/Icon'
import { IncentivesProps } from '../../pages/Home'
import { MutableRefObject } from 'react'

export interface PersonalizedIncentivesProps {
  householdInformation: IncentivesProps
  incentivesRef?: MutableRefObject<any>
}

const PersonalizedIncentives = ({
  householdInformation,
  incentivesRef
}: PersonalizedIncentivesProps) => (
  <S.Wrapper>
    <S.Background>
      <S.Content>
        <S.Title>Your personalized incentives</S.Title>
        <S.IncentivesBody>
          <S.IncentivesBodyIcon>
            <Icon icon={'Lightning'} />
            <Icon icon={'Lightning'} />
            <Icon icon={'Lightning'} />
          </S.IncentivesBodyIcon>
          <S.DescriptionWrapper>
            <S.DescriptionBox>
              <S.DescriptionContainer>
                <S.Subtitle>Available</S.Subtitle>
                <S.Subtitle style={{ marginBottom: '8px'}}>
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
                <S.Subtitle style={{ marginBottom: '8px'}}>
                  savings per year
                  <Info
                    text={`This estimate is based on energy costs in your state. 
                It includes savings on both utility and gasoline bills if you switch to an 
                electric vehicle and a heat pump for space and water heating.`}
                  />
                </S.Subtitle>
                <S.Price data-testid="household_annual_savings">
                  {formatCurrency(
                    householdInformation?.estimated_annual_savings
                  )}
                </S.Price>
              </S.DescriptionContainer>
            </S.DescriptionBox>
            <S.TotalContainer>
              <S.TotalText>Total incentives</S.TotalText>
              <S.TotalPrice>
                {formatCurrency(
                  householdInformation?.tax_savings +
                    householdInformation?.pos_savings
                )}
              </S.TotalPrice>
            </S.TotalContainer>
          </S.DescriptionWrapper>
        </S.IncentivesBody>
        <S.Separator></S.Separator>
        <S.IncentivesFooter>
          <S.IncentivesFooterContent>
            <p>
              These values are estimates and may be inaccurate.
              Tax credits can only be used to offset your federal taxes owed.
            </p>
            <p style={{ marginTop: '15px' }}>
              Powered by {' '}
              <S.ContentLink
                href="https://www.rewiringamerica.org"
                target="_blank"
              >
                Rewiring America
              </S.ContentLink>{' '}
              and subject to the API{' '}
              <S.ContentLink
                href="https://content.rewiringamerica.org/api/terms.pdf"
                target="_blank"
              >
                Terms of Service.
              </S.ContentLink>
            </p>
          </S.IncentivesFooterContent>
          {/*<S.IncentivesFooterContent className="second-section">*/}
          {/*  Your income is above the threshold for upfront discounts and/or EV*/}
          {/*  tax credits, but your tax liability will likely qualify you for*/}
          {/*  equipment tax credits. You do qualify for a performance-based*/}
          {/*  efficiency rebate worth $4,000. However, we do not consider this an*/}
          {/*  upfront discount. Check out this relevant case study!*/}
          {/*</S.IncentivesFooterContent>*/}
        </S.IncentivesFooter>
      </S.Content>
    </S.Background>
  </S.Wrapper>
)

export default PersonalizedIncentives
