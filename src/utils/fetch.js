var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function http(path, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = new Request(path, config);
        const response = yield fetch(request);
        if (!response.ok) {
            const error = yield response.json();
            return {
                code: error.statusCode,
                error: error.error,
                message: error.message
            };
        }
        // may error if there is no body, return empty array
        return response.json() || [];
    });
}
export function get(path, params, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const init = Object.assign({ method: 'get' }, config);
        if (params) {
            path += `?${new URLSearchParams(params).toString()}`;
        }
        return yield http(path, init);
    });
}
export function post(path, body, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const init = Object.assign({ method: 'post', body: JSON.stringify(body) }, config);
        return yield http(path, init);
    });
}
export function put(path, body, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const init = Object.assign({ method: 'put', body: JSON.stringify(body) }, config);
        return yield http(path, init);
    });
}
