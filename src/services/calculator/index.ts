import { apiRoutes } from '@services/constants'
import * as fetch from '@utils/fetch'

import { CalculatorIncomes, IncentivesApiResponse } from '../types'

class CalculatorService {
  getCalculatorResponse: (
    data: CalculatorIncomes
  ) => Promise<IncentivesApiResponse> = async ({
    zip,
    owner_status,
    household_income,
    tax_filing,
    household_size
  }: CalculatorIncomes) => {
    return await fetch.get(
      apiRoutes.calculator,
      {
        zip,
        owner_status,
        household_income,
        tax_filing,
        household_size
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_REWIRING_AMERICA_TOKEN}`
        }
      }
    )
  }
}

export default CalculatorService
