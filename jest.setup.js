const { mockServer } = require('./src/mock/request')

beforeAll(() => mockServer.listen({ onUnhandledRequest: 'warn' }))
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())
