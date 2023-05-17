import HttpCodes from '@common/constants/httpCodes'
import { rest } from 'msw'

import { mockServer } from './'

type Method = 'get' | 'post' | 'put' | 'delete'

type Options = {
  status?: number
  delay?: number
  httpMethod?: Method
}

class MockRequest {
  static rest<ResponseType>(
    url: string,
    response: ResponseType,
    options?: Options
  ) {
    const restApi = rest[options?.httpMethod ?? 'get']

    return restApi(url, (_, res, ctx) => {
      return res(
        ctx.delay(options?.delay ?? 0),
        ctx.status(options?.status ?? HttpCodes.OK),
        ctx.json(response)
      )
    })
  }

  static mock<ResponseType>(
    url: string,
    response: ResponseType,
    options?: Options
  ) {
    mockServer.use(this.rest(url, response, options))
  }
}

export default MockRequest
