import { apiRoutes } from '@services/constants'
import * as fetch from '@utils/fetch'

import { IncentivesObject } from '../types'

class IncentivesServices {
  getIncentives: () => Promise<IncentivesObject> = async () => {
    const response = await fetch.get<IncentivesObject>(
      'https://api.rewiringamerica.org/api/v0/incentives',
      null,
      {
        headers: {
          Authorization: `Bearer zpka_36dd9115f1b2463b93857ea0c517e640_73f9ee2a`
        }
      }
    )

    return {
      incentives: response.incentives
    }
  }
}

export default IncentivesServices
