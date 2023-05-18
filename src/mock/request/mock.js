import HttpCodes from '@common/constants/httpCodes';
import { rest } from 'msw';
import { mockServer } from './';
class MockRequest {
    static rest(url, response, options) {
        var _a;
        const restApi = rest[(_a = options === null || options === void 0 ? void 0 : options.httpMethod) !== null && _a !== void 0 ? _a : 'get'];
        return restApi(url, (_, res, ctx) => {
            var _a, _b;
            return res(ctx.delay((_a = options === null || options === void 0 ? void 0 : options.delay) !== null && _a !== void 0 ? _a : 0), ctx.status((_b = options === null || options === void 0 ? void 0 : options.status) !== null && _b !== void 0 ? _b : HttpCodes.OK), ctx.json(response));
        });
    }
    static mock(url, response, options) {
        mockServer.use(this.rest(url, response, options));
    }
}
export default MockRequest;
