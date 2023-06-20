import MockGenerator from '@mock/generator'
import { IncentivesResponse } from '@services/types'
import Chance from 'chance'

const chance = new Chance()
export class CalculatorMock extends MockGenerator<IncentivesResponse> {
  getOne(properties?: Partial<IncentivesResponse>): IncentivesResponse {
    return {
      pos_savings: chance.integer({ min: 200, max: 8000 }),
      tax_savings: chance.integer({ min: 200, max: 8000 }),
      estimated_annual_savings: chance.integer({ min: 200, max: 8000 }),
      tax_credit_incentives: [],
      ...properties
    }
  }
}
