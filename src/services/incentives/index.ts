import { apiRoutes } from '@services/constants'
import * as fetch from '@utils/fetch'

import { IncentivesObject } from '../types'

class IncentivesServices {
  getIncentives: () => Promise<IncentivesObject> = async () => {
    const response = await fetch.get<IncentivesObject>(
      apiRoutes.incentives,
      null,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_REWIRING_AMERICA_TOKEN}`
        }
      }
    )

    return {
      incentives: response.incentives
    }
  }
}

export default IncentivesServices
