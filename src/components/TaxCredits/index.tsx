import React from 'react'
import { formatCurrency } from '@utils/currency'
import { formatPercent, isInt } from '@utils/number'
import { useTheme } from 'styled-components'

import * as S from './styles'
import Info from '@components/Info'
import classnames from 'classnames'
import { TaxCreditsIncentives } from '@services/types'

interface TaxCreditsProps {
  tableData: TaxCreditsIncentives[]
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
                textAlign: 'left',
                display: 'grid'
              }}
            >
              <thead>
                <S.TableRowHeader>
                  <S.TableTh>ITEM</S.TableTh>
                  <S.TableTh>Estimated savings</S.TableTh>
                </S.TableRowHeader>
              </thead>
              <tbody>
                {tableData &&
                  tableData.map((item, index) => (
                    <tr className="tax-credits-table-row" key={index}>
                      <S.TableTd>
                        <div style={index == 0 ? { fontWeight: 'bold' } : {}}>
                          <span
                            style={{ marginRight: '6px' }}
                            className={classnames({
                              'not-eligible': !item.eligible
                            })}
                          >
                            {item.item}
                          </span>
                          <Info text={item.tooltip} />
                        </div>
                      </S.TableTd>
                      <S.TableTd>
                        <div
                          style={index == 0 ? { fontWeight: 'bold' } : {}}
                          className={classnames({
                            'not-eligible': !item.eligible
                          })}
                        >
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
