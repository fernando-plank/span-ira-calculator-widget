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
          <S.Subtitle>Enjoy even more potential savings from</S.Subtitle>
          <S.Subtitle>localized utility incentives.</S.Subtitle>
        </div>
        <div style={{ marginTop: '70px' }}>
          <Accordion icon={'Plus'} title={'California'}>
            <S.BodyWrapper></S.BodyWrapper>
            <S.BodyWrapper>
              <S.BodyContent>
                <div>
                  <S.BodyText>
                    <b>Silicon Valley Power</b> customers can save up to $2,500
                    on SPAN Panel as part of a larger home electrification
                    project.
                  </S.BodyText>
                </div>
                <S.LearnMoreButtonContent>
                  <S.LearnMoreButton
                    onClick={() => {
                      window.open(
                        'https://www.siliconvalleypower.com/home/showpublisheddocument/77952/637945284994130000',
                        '_blank'
                      )
                    }}
                  >
                    Learn more
                  </S.LearnMoreButton>
                </S.LearnMoreButtonContent>
              </S.BodyContent>
              <S.BodyContent>
                <div>
                  <S.BodyText>
                    <b>Sacramento Municipal Utility District</b> (SMUD)
                    customers can save up to $2,500 on SPAN Panel as part of a
                    larger home electrification project.
                  </S.BodyText>
                </div>
                <S.LearnMoreButtonContent>
                  <S.LearnMoreButton
                    onClick={() => {
                      window.open(
                        'https://www.smud.org/en/Rebates-and-Savings-Tips/Improve-Home-Efficiency/Go-Electric-Bonus-Package',
                        '_blank'
                      )
                    }}
                  >
                    Learn more
                  </S.LearnMoreButton>
                </S.LearnMoreButtonContent>
              </S.BodyContent>
            </S.BodyWrapper>
          </Accordion>

          <Accordion icon={'Plus'} title={'Hawai’i'}>
            <S.BodyWrapper></S.BodyWrapper>
            <S.BodyWrapper>
              <S.BodyContent>
                <div>
                  <S.BodyText>
                    <b>Shifted Energy</b> will cover the costs of SPAN Panel in
                    full (plus up to $4,000 for installation) for customers who
                    agree to share SPAN Panel data and control.
                  </S.BodyText>
                </div>
                <S.LearnMoreButtonContent>
                  <S.LearnMoreButton
                    onClick={() => {
                      window.open('https://www.shiftedenergy.com/', '_blank')
                    }}
                  >
                    Learn more
                  </S.LearnMoreButton>
                </S.LearnMoreButtonContent>
              </S.BodyContent>
              <S.BodyContent>
                <div>
                  <S.BodyText>
                    <b>Hawaiian Electric</b> customers can save $500 on SPAN
                    Panel by becoming a HECO Utility rate payer.
                  </S.BodyText>
                </div>
                <S.LearnMoreButtonContent>
                  <S.LearnMoreButton
                    onClick={() => {
                      window.open(
                        'https://hawaiienergy.com/for-homes/rebates',
                        '_blank'
                      )
                    }}
                  >
                    Learn more
                  </S.LearnMoreButton>
                </S.LearnMoreButtonContent>
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
