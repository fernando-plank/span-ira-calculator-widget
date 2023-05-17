import MockGenerator from '@mock/generator'
import { IncentivesApiResponse } from '@services/types'
import Chance from 'chance'

const chance = new Chance()
export class IncentivesMock extends MockGenerator<IncentivesApiResponse> {
  getOne(properties?: Partial<IncentivesApiResponse>): IncentivesApiResponse {
    return {
      type: chance.pickset(['tax_credit', 'post_rebate'], 1),
      program: chance.word(),
      program_es: chance.word(),
      item: chance.pickset(['Electric Panel', 'Battery Storage Installation']),
      more_info_url: chance.url(),
      more_info_url_es: chance.url(),
      amount: chance.integer({ min: 200, max: 8000 }),
      amount_type: 'dollar_amount',
      representative_amount: null,
      item_type: chance.pickset(['tax_credit', 'post_rebate'], 1),
      owner_status: ['homeowner'],
      ami_qualification: 'less_than_80_ami',
      start_date: chance.integer({ min: 2023, max: 2024 }),
      end_date: chance.integer({ min: 2023, max: 2024 }),
      ...properties
    }
  }
}
