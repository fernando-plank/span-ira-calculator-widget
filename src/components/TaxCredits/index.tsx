import React from 'react'
import { formatCurrency } from '@utils/currency'
import { formatPercent, isInt } from '@utils/number'
import { TaxCreditsTableData } from 'types/tax-credits'
import { useTheme } from 'styled-components'

import * as S from './styles'

interface TaxCreditsProps {
  tableData: TaxCreditsTableData[]
}

const TaxCredits = ({ tableData }: TaxCreditsProps) => {
  const theme = useTheme()

  return (
    <S.Wrapper>
      <S.Title data-testid="tax-credits-title">Tax credits</S.Title>
      <S.TaxBody>
        <S.TaxBodyContent>
          <S.TaxText>
            Disclaimer: These values are estimates. The rebates may be
            implemented differently in each state, so we cannot guarantee final
            amounts, eligibility, or timeline. And without additional
            appropriations from Congress, the rebate programs will end once
            their initial IRA funding is exhausted. Tax credits can only be used
            to offset your federal taxes owed, which we estimate but do not
            know.
          </S.TaxText>
        </S.TaxBodyContent>
        <S.TaxBodyContent>
          <table
            style={{ width: '100%', textAlign: 'left', marginBottom: '130px' }}
          >
            <thead>
              <tr>
                <S.TableTh>ITEM</S.TableTh>
                <S.TableTh>AMOUNT</S.TableTh>
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
                      {item.item}
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
                      {isInt(item.amount)
                        ? formatCurrency(item.amount)
                        : formatPercent(item.amount)}
                    </S.TableTd>
                  </tr>
                ))}
            </tbody>
          </table>
        </S.TaxBodyContent>
      </S.TaxBody>
    </S.Wrapper>
  )
}

export default TaxCredits
