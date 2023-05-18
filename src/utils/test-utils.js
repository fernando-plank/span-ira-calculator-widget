var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/* eslint-disable import/export */
import React from 'react';
import theme from '@styles/theme';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
jest.mock('../components/Icon', () => {
    return jest.fn(() => React.createElement("div", null, "mocked icon"));
});
const customRender = (ui, _a = {}) => {
    var renderOptions = __rest(_a, []);
    return render(React.createElement(ThemeProvider, { theme: theme }, ui), renderOptions);
};
export * from '@testing-library/react';
export { customRender as render };
