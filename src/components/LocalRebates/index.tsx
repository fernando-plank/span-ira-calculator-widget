import React from 'react'
import Accordion from '@components/Accordion'

import * as S from './styles'

const LocalRebates = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <div>
          <S.Title data-testid="local-rebates-title">
            Local utility electrification rebates
          </S.Title>
          <S.Subtitle data-testid="local-rebates-title">
            Enjoy even more potential savings from
          </S.Subtitle>
          <S.Subtitle data-testid="local-rebates-title">
            localized utility incentives.
          </S.Subtitle>
        </div>
        <div style={{ marginTop: '40px' }}>
          <Accordion icon={'Plus'} title={'California'}>
            <S.BodyWrapper></S.BodyWrapper>
            <S.BodyWrapper>
              <S.BodyContent>
                <S.BodyText>
                  <b>Silicon Valley Power</b> customers can save up to $2,500 on
                  SPAN as part of a larger home electrification project.
                </S.BodyText>
                <S.LearnMoreButton>Learn more</S.LearnMoreButton>
              </S.BodyContent>
              <S.BodyContent>
                <S.BodyText>
                  <b>Sacramento Municipal Utility District</b> (SMUD) customers
                  can save up to $2,500 on SPAN Panel as part of a larger home
                  electrification project.
                </S.BodyText>
                <S.LearnMoreButton>Learn more</S.LearnMoreButton>
              </S.BodyContent>
            </S.BodyWrapper>
          </Accordion>

          <Accordion icon={'Plus'} title={'Hawai’i'}>
            <S.BodyWrapper></S.BodyWrapper>
            <S.BodyWrapper>
              <S.BodyContent>
                <S.BodyText>
                  <b>Shifted Energy</b> will cover the costs of SPAN Panel in
                  full (plus up to $4,000 for installation) for customers who
                  agree to share SPAN Panel data and control.
                </S.BodyText>
                <S.LearnMoreButton>Learn more</S.LearnMoreButton>
              </S.BodyContent>
              <S.BodyContent>
                <S.BodyText>
                  <b>Hawaiian Electric</b> customers can save $500 on SPAN Panel
                  product costs by becoming a HECO Utility rate payer.
                </S.BodyText>
                <S.LearnMoreButton>Learn more</S.LearnMoreButton>
              </S.BodyContent>
            </S.BodyWrapper>
          </Accordion>
        </div>
        <div>
          <S.TextFooter>
            Any incentives, grants, or rebates provided by a government or
            public utility may affect the tax credits listed above.
          </S.TextFooter>
        </div>
      </S.Content>
    </S.Wrapper>
  )
}

export default LocalRebates
