import '@testing-library/jest-dom';
import 'jest-styled-components'
import 'whatwg-fetch'

import { mockServer } from './src/mock/request'

beforeAll(() => mockServer.listen({ onUnhandledRequest: 'warn' }))
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())
