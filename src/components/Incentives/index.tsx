import React from 'react'
import { TAX_FILING } from '@services/types'
import { formatCurrency } from '@utils/currency'

import * as S from './styles'

export type CalculatorResponseProps = {
  item: string
  program: string
  filing_status: string
  amount_type: string
  amount: number
  end_date: number
  item_url: string
  type: string
}

export type IncentivesProps = {
  incentives: CalculatorResponseProps[]
}

const Incentives = ({ incentives }: IncentivesProps) => (
  <S.Wrapper>
    <h1>Incentives</h1>
    <br />
    <div>
      <table>
        <thead>
          <tr>
            <th>Incentive</th>
            <th>Description</th>
            <th>Tax Filing</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {incentives.map((incentive: CalculatorResponseProps, index) => {
            if (incentive.type === 'tax_credit') {
              return (
                <tr key={`${index}`}>
                  <td>{incentive.item}</td>
                  <td>{incentive.program}</td>
                  <td>{TAX_FILING[incentive.filing_status] ?? '-'}</td>
                  <td>
                    {incentive.amount_type === 'percent'
                      ? incentive.amount * 100 + '%'
                      : formatCurrency(incentive.amount)}
                  </td>
                  <td>{incentive.end_date}</td>
                  <td>
                    <button>
                      <a href={incentive.item_url}>View</a>
                    </button>
                  </td>
                </tr>
              )
            }
            return null
          })}
        </tbody>
      </table>
    </div>
  </S.Wrapper>
)

export default Incentives
