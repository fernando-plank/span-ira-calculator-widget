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
          <S.TaxBodyContent></S.TaxBodyContent>
          <S.TaxBodyContent>
            <table
              style={{
                width: '100%',
                textAlign: 'left'
              }}
            >
              <thead>
                <tr>
                  <S.TableTh>ITEM</S.TableTh>
                  <S.TableTh>Estimated savings</S.TableTh>
                </tr>
              </thead>
              <tbody>
                {tableData &&
                  tableData.map((item, index) => (
                    <tr key={index}>
                      <S.TableTd>
                        <div style={index == 0 ? { fontWeight: 'bold' } : {}}>
                          {item.item}
                          <Info text={item.tooltip} />
                        </div>
                      </S.TableTd>
                      <S.TableTd>
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
