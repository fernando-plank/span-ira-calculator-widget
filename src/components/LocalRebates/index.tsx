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
        </div>
        <div>
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
                  can save up to $2,500 as part of a larger home electrification
                  project.
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
                  <b>Shifted Energy</b> customers can have the costs of SPAN
                  Panel covered, plus up to $4,000 for install when they agree
                  to share SPAN Panel data and control with Shifted Energy.
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
            We’re constantly updating this list, so check back to see if your
            utility provider provides localized incentives for getting SPAN.
          </S.TextFooter>
        </div>
      </S.Content>
    </S.Wrapper>
  )
}

export default LocalRebates
