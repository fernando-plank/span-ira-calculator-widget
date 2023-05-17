import { CalculatorMock } from '@services/calculator/mock/calculatorMock'
import { apiRoutes } from '@services/constants'
import { IncentivesMock } from '@services/incentives/mock/incentivesMock'
import { rest } from 'msw'

const handlers = [
  rest.get(apiRoutes.incentives, (_, res, ctx) => {
    return res(
      ctx.json({
        incentives: [new IncentivesMock().getOne()]
      })
    )
  }),
  rest.get(apiRoutes.calculator, (_, res, ctx) => {
    return res(ctx.json(new CalculatorMock().getOne()))
  })
]

export default handlers
