import React from 'react'
import { formatCurrency } from '@utils/currency'
import { formatPercent, isInt } from '@utils/number'
import { TaxCreditsTableData } from 'types/tax-credits'
import { useTheme } from 'styled-components'

import * as S from './styles'
import Info from '@components/Info'

interface TaxCreditsProps {
  tableData: TaxCreditsTableData[]
}

const TaxCredits = ({ tableData }: TaxCreditsProps) => {
  const theme = useTheme()

  return (
    <S.Wrapper>
      <S.Content>
        <S.AvailableNowText>AVAILABLE NOW</S.AvailableNowText>
        <S.Title data-testid="tax-credits-title">Tax credits</S.Title>
        <S.Subtitle>
          Save on SPAN Panel and other home electrification upgrades.
        </S.Subtitle>
        <S.TaxBody>
          <S.TaxBodyContent>
            <S.TaxText>
              Disclaimer: These values are estimates. The rebates may be
              implemented differently in each state, so we cannot guarantee
              final amounts, eligibility, or timeline. And without additional
              appropriations from Congress, the rebate programs will end once
              their initial IRA funding is exhausted. Tax credits can only be
              used to offset your federal taxes owed, which we estimate but do
              not know.
            </S.TaxText>
          </S.TaxBodyContent>
          <S.TaxBodyContent>
            <S.CardInfo>
              <S.CardTitle>25C Tax Credit </S.CardTitle>
              <S.CardText>
                Provides 30% tax credit of maximum $600 per year
              </S.CardText>
            </S.CardInfo>
            <table
              style={{
                width: '100%',
                textAlign: 'left',
                marginBottom: '130px'
              }}
            >
              <thead>
                <tr>
                  <S.TableTh style={{ paddingBottom: '20px' }}>ITEM</S.TableTh>
                  <S.TableTh>Estimated savings</S.TableTh>
                </tr>
              </thead>
              <tbody>
                {tableData &&
                  tableData.map((item, index) => (
                    <tr key={index}>
                      <S.TableTd
                        style={{
                          color:
                            index == tableData.length - 1 ||
                            index == tableData.length - 2
                              ? `#B0B0B1`
                              : `${theme.colors.black}`
                        }}
                      >
                        <div style={index == 0 ? { fontWeight: 'bold' } : {}}>
                          {item.item}
                          <Info text={item.tooltip} />
                        </div>
                      </S.TableTd>
                      <S.TableTd
                        style={{
                          color:
                            index == tableData.length - 1 ||
                            index == tableData.length - 2
                              ? `#B0B0B1`
                              : `${theme.colors.black}`
                        }}
                      >
                        <div style={index == 0 ? { fontWeight: 'bold' } : {}}>
                          {isInt(item.amount)
                            ? formatCurrency(item.amount)
                            : formatPercent(item.amount)}
                        </div>
                      </S.TableTd>
                    </tr>
                  ))}
              </tbody>
            </table>
          </S.TaxBodyContent>
        </S.TaxBody>
      </S.Content>
    </S.Wrapper>
  )
}

export default TaxCredits
